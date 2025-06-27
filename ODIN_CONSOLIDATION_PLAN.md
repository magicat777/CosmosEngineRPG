# ODIN Prime Microservice Consolidation Plan

## Executive Summary
The ODIN Prime system currently runs 59 deployments with 119 pods. Through consolidation, we can reduce this to approximately 25-30 deployments while maintaining all functionality and improving efficiency.

## Current State Analysis

### Pod Distribution
- **Total Deployments**: 59
- **Active Deployments**: 48
- **Total Pods**: ~119
- **Pod Limit**: 200 (recently increased from 110)

### Service Categories
1. **Core Infrastructure** (7 services) - Well-optimized
2. **Memory Subsystem** (19 services) - Highly fragmented
3. **TTS Subsystem** (4 services) - Can be consolidated
4. **API/Orchestration** (10 services) - Many duplicates
5. **GPU Services** (4 services) - All inactive
6. **User Interfaces** (6 services) - Some redundancy
7. **Supporting Services** (8 services) - Can be optimized

## Consolidation Strategy

### Phase 1: Immediate Consolidation (Week 1)

#### 1. TTS Subsystem Consolidation
**Current State**: 4 separate services
- tts-audio-pipeline
- tts-direct (2 replicas)
- tts-predictive
- tts-streaming (2 replicas)

**Proposed State**: 1 unified service
```yaml
name: odin-tts-unified
containers:
  - name: tts-server
    image: python:3.11-slim
    ports:
      - 9000 (HTTP API)
      - 9001 (WebSocket streaming)
      - 9002 (gRPC)
features:
  - Direct TTS synthesis
  - Streaming support
  - Predictive caching
  - Audio pipeline processing
replicas: 2 (for redundancy)
```
**Pod Reduction**: 6 → 2 pods

#### 2. Memory Subsystem Consolidation
**Current State**: 19 services with overlapping functionality

**Proposed State**: 5 core services
```yaml
1. memory-core-service:
   - CRUD operations
   - Deduplication
   - Basic search
   - Privacy controls
   
2. memory-analytics-service:
   - Analytics dashboard
   - Reporting
   - Quality scoring
   - Operations monitoring
   
3. memory-intelligence-service:
   - Enhanced search
   - Relationship mapping
   - Categorization/tagging
   - Memory-aware Claude integration
   
4. memory-maintenance-service:
   - Export/backup
   - Retention policies
   - Health monitoring
   
5. memory-ui-service:
   - All dashboard frontends
   - Unified API gateway
```
**Pod Reduction**: 19 → 5 pods

#### 3. API/Orchestration Consolidation
**Current State**: Multiple versions and duplicates

**Proposed State**: 2 services
```yaml
1. odin-api-gateway:
   - Unified entry point
   - Request routing
   - Authentication
   - Rate limiting
   
2. odin-orchestrator:
   - Query classification
   - Service coordination
   - Memory integration
   - Response aggregation
```
**Pod Reduction**: 10 → 2 pods

#### 4. Remove Inactive Services
- All GPU services (4 deployments)
- Duplicate "fixed" versions
- Old test deployments
**Pod Reduction**: 11 → 0 pods

### Phase 2: Architecture Optimization (Week 2-3)

#### 1. Multi-Container Pod Pattern
Combine related services into single pods with multiple containers:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: odin-memory-suite
spec:
  template:
    spec:
      containers:
      - name: memory-api
        image: memory-service:latest
        ports: [8000]
      - name: memory-worker
        image: memory-service:latest
        command: ["python", "worker.py"]
      - name: memory-cache
        image: redis:alpine
        ports: [6379]
```

#### 2. Shared Libraries
Create base images with common dependencies:
```dockerfile
# Base image for all Python services
FROM python:3.11-slim as odin-python-base
RUN pip install fastapi uvicorn asyncpg redis httpx pydantic

# Memory services base
FROM odin-python-base as odin-memory-base
RUN pip install chromadb neo4j numpy scikit-learn
```

#### 3. Service Mesh Implementation
Use Istio or Linkerd for:
- Service discovery
- Load balancing
- Circuit breaking
- Observability

### Phase 3: Communication Efficiency (Week 4)

#### 1. Internal Communication Optimization
- Replace HTTP with gRPC for internal services
- Implement connection pooling
- Use Redis pub/sub for event-driven communication

#### 2. Database Connection Pooling
```yaml
# Shared connection pool sidecar
- name: pgbouncer
  image: pgbouncer/pgbouncer
  env:
    - name: DATABASES_DEFAULT
      value: "odin_prime = host=postgresql.odin-prime port=5432"
    - name: POOL_MODE
      value: "transaction"
    - name: MAX_CLIENT_CONN
      value: "1000"
```

#### 3. Caching Strategy
- Implement Redis cache sidecar pattern
- Use Memcached for session data
- Enable query result caching

## Implementation Timeline

### Week 1: Quick Wins
- [ ] Consolidate TTS services
- [ ] Remove inactive deployments
- [ ] Merge duplicate API services

### Week 2: Memory Subsystem
- [ ] Design unified memory service architecture
- [ ] Implement memory-core-service
- [ ] Migrate existing functionality

### Week 3: Testing & Migration
- [ ] Load testing consolidated services
- [ ] Gradual traffic migration
- [ ] Performance benchmarking

### Week 4: Optimization
- [ ] Implement service mesh
- [ ] Optimize communication protocols
- [ ] Fine-tune resource allocation

## Expected Outcomes

### Resource Efficiency
- **Pod Count**: 119 → 45-50 (60% reduction)
- **Memory Usage**: ~30% reduction
- **CPU Usage**: ~20% reduction
- **Network Traffic**: ~40% reduction

### Operational Benefits
- Simplified debugging and monitoring
- Reduced configuration complexity
- Faster deployment times
- Improved system reliability

### Performance Improvements
- 50% reduction in inter-service latency
- 3x improvement in memory query performance
- 2x faster TTS response times

## Risk Mitigation

1. **Gradual Migration**: Use blue-green deployments
2. **Rollback Strategy**: Maintain old deployments until verified
3. **Monitoring**: Enhanced observability during transition
4. **Testing**: Comprehensive integration tests

## Specific Consolidation Actions

### Immediate Actions (Do Now)
```bash
# 1. Scale down inactive GPU services
kubectl scale deployment gpu-embedding-optimized gpu-service-controller gpu-unified-orchestrator odin-unified-gpu-service --replicas=0 -n odin-prime

# 2. Remove duplicate services
kubectl delete deployment deduplication-service-fixed-v2 memory-parser-service-fixed-v2 -n odin-prime

# 3. Consolidate API services
kubectl scale deployment odin-api-simple odin-api-postgres --replicas=0 -n odin-prime
```

### TTS Consolidation Script
```bash
# Create unified TTS deployment
cat > /tmp/tts-unified.yaml << EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tts-unified-service
  namespace: odin-prime
spec:
  replicas: 2
  selector:
    matchLabels:
      app: tts-unified
  template:
    metadata:
      labels:
        app: tts-unified
    spec:
      containers:
      - name: tts-server
        image: python:3.11-slim
        ports:
        - containerPort: 9000
        - containerPort: 9001
        - containerPort: 9002
        env:
        - name: SERVICE_MODE
          value: "unified"
        volumeMounts:
        - name: app-code
          mountPath: /app
      volumes:
      - name: app-code
        configMap:
          name: tts-unified-code
EOF

kubectl apply -f /tmp/tts-unified.yaml
```

## Monitoring & Validation

### Key Metrics to Track
1. **Service Health**
   - Pod restart count
   - Error rates
   - Response times

2. **Resource Usage**
   - CPU/Memory per service
   - Network I/O
   - Database connections

3. **Business Metrics**
   - Query success rate
   - TTS generation time
   - Memory retrieval accuracy

### Validation Checklist
- [ ] All endpoints responding correctly
- [ ] No increase in error rates
- [ ] Performance meets or exceeds baseline
- [ ] Resource usage reduced as expected
- [ ] All integrations functioning

## Conclusion

This consolidation plan will transform ODIN Prime from a sprawling microservice architecture to a lean, efficient system while maintaining all functionality. The phased approach ensures minimal disruption while delivering immediate benefits.

**Next Steps**:
1. Review and approve consolidation plan
2. Begin Phase 1 implementation
3. Establish monitoring dashboards
4. Schedule weekly progress reviews