# Memory Services Consolidation Mapping

## Analysis Summary

Based on the code analysis of the memory-related services in the odin-prime namespace, here's what each service does and how they map to the proposed consolidated architecture.

## Current Services Overview

### 1. **memory-aware-claude & memory-aware-claude-v2**
- **Functionality**: Core Claude API integration with memory context
- **Key Features**:
  - Chat interface with memory retrieval
  - JWT authentication (v2)
  - Streaming responses
  - Memory context injection into prompts
  - TTS integration
  - Caching with Redis
  - Multi-source memory queries (PostgreSQL, ChromaDB, Neo4j)
- **Database Usage**: PostgreSQL (messages, memories), Redis (caching), ChromaDB (vector search), Neo4j (relationships)

### 2. **memory-analytics-dashboard & memory-analytics-reporting-service**
- **Functionality**: Analytics, insights, and reporting
- **Key Features**:
  - System-wide analytics
  - User-specific analytics
  - Temporal patterns analysis
  - Quality metrics
  - Health reports
  - Visual chart generation (matplotlib)
  - Dashboard HTML generation
- **Database Usage**: PostgreSQL (odin.memories table)

### 3. **memory-deduplication-service**
- **Functionality**: Duplicate detection and merging
- **Key Features**:
  - Text similarity calculation (multiple algorithms)
  - Semantic similarity boosting
  - Intelligent memory merging
  - Batch deduplication
  - Dry-run mode
- **Database Usage**: PostgreSQL (odin.memories table)

### 4. **memory-export-backup-service**
- **Functionality**: Data export and backup
- **Key Features**:
  - Multiple export formats (JSON, CSV, YAML)
  - Backup creation with checksums
  - Restore functionality
  - Filtering by date/category/quality
- **Database Usage**: PostgreSQL (odin.memories table)

### 5. **memory-health-monitoring-service**
- **Functionality**: System health monitoring and alerting
- **Key Features**:
  - Real-time health metrics
  - Performance monitoring
  - Prometheus metrics export
  - WebSocket support for live updates
  - Alert generation
- **Database Usage**: PostgreSQL, Redis, Neo4j

### 6. **memory-categorization-tagging-service**
- **Functionality**: Automated categorization and tagging
- **Key Features**:
  - Pattern-based categorization (14 categories)
  - Auto-tagging with rules
  - Tag suggestions
  - Bulk categorization
  - Category analysis
- **Database Usage**: PostgreSQL (odin.memories table)

### 7. **memory-quality-scoring-service**
- **Functionality**: Quality evaluation and scoring
- **Key Features**:
  - Multi-factor quality scoring
  - Temporal relevance calculation
  - Source reliability scoring
  - Emotional significance detection
  - Bulk rescoring
- **Database Usage**: PostgreSQL (odin.memories table)

### 8. **memory-relationship-mapping-service**
- **Functionality**: Graph-based relationship discovery
- **Key Features**:
  - Entity extraction
  - Relationship detection (10 types)
  - Graph analysis (centrality, communities, paths)
  - Neo4j integration
  - Similarity-based relationships
- **Database Usage**: PostgreSQL (odin.memories), Neo4j (graph storage)

## Proposed Consolidation Mapping

### 1. **memory-core-api** (Core Memory Management)
**Consolidates:**
- memory-aware-claude (partial - CRUD operations)
- memory-aware-claude-v2 (partial - CRUD operations)

**Includes:**
- Basic CRUD operations
- Memory search functionality
- Direct database operations
- Core data models

### 2. **memory-intelligence** (Analysis & Enhancement)
**Consolidates:**
- memory-categorization-tagging-service
- memory-quality-scoring-service
- memory-relationship-mapping-service
- memory-deduplication-service (partial - similarity detection)

**Includes:**
- Categorization and tagging
- Quality scoring algorithms
- Relationship mapping
- Entity extraction
- Similarity detection

### 3. **memory-operations** (Maintenance & Operations)
**Consolidates:**
- memory-deduplication-service (partial - merge operations)
- memory-export-backup-service
- memory-health-monitoring-service (partial - maintenance tasks)

**Includes:**
- Deduplication execution
- Export/import functionality
- Backup/restore operations
- Bulk operations
- Data maintenance tasks

### 4. **memory-analytics** (Analytics & Reporting)
**Consolidates:**
- memory-analytics-dashboard
- memory-analytics-reporting-service
- memory-health-monitoring-service (partial - analytics)

**Includes:**
- System analytics
- User analytics
- Report generation
- Dashboard generation
- Temporal analysis
- Category/tag analysis

### 5. **memory-claude-integration** (Claude-Specific Features)
**Consolidates:**
- memory-aware-claude (partial - Claude integration)
- memory-aware-claude-v2 (partial - Claude integration)

**Includes:**
- Claude API integration
- Memory context injection
- Streaming responses
- TTS integration
- Chat interface
- JWT authentication

## Database Connection Summary

### PostgreSQL (odin_prime database)
- **Primary table**: odin.memories
- **Used by all services**
- **Connection string**: postgresql://postgres:PostgreSQL2025!@postgresql:5432/odin_prime

### Redis
- **Used for**: Caching, temporary data
- **Used by**: memory-aware-claude services, health monitoring
- **Connection**: redis://redis-unified:6379 or redis://:Redis2025!@redis:6379

### Neo4j
- **Used for**: Graph relationships
- **Used by**: memory-relationship-mapping, memory-aware-claude
- **Connection**: neo4j://neo4j:7687

### ChromaDB
- **Used for**: Vector search
- **Used by**: memory-aware-claude services
- **Connection**: http://chromadb.odin-prime.svc.cluster.local:8000

## Migration Strategy Recommendations

1. **Phase 1**: Create the 5 new consolidated services with shared code modules
2. **Phase 2**: Migrate functionality service by service, starting with:
   - memory-core-api (foundation)
   - memory-intelligence (enhancement features)
   - memory-analytics (reporting)
3. **Phase 3**: Migrate operational features:
   - memory-operations
   - memory-claude-integration
4. **Phase 4**: Update all service references and deprecate old services
5. **Phase 5**: Remove old services after verification

## Shared Components to Extract

1. **Database connection pools** (PostgreSQL, Redis, Neo4j, ChromaDB)
2. **Common data models** (Memory, User, etc.)
3. **Utility functions** (text processing, similarity calculations)
4. **Authentication/authorization** (JWT handling)
5. **Metrics and monitoring** (Prometheus integration)