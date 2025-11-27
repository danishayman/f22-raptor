# Matrix Operations Service Demo Script

## Overview
This is a demo of comparing gRPC vs HTTP for matrix operations across 3 services: Multiply, Average, and Min/Max.

---

## Demo Flow

### Part 1: Single Container gRPC (5 minutes)

**What to say:**
> "First, I'll demonstrate our gRPC implementation with a single server container. gRPC uses Protocol Buffers for binary serialization and HTTP/2 for transport, which should give us better performance than traditional REST APIs."

**Commands:**
```cmd
REM Start the gRPC server in Docker
docker-compose -f docker-compose-grpc-single.yml up --build
```

**What to say while it builds:**
> "The server is starting up. It runs all three services: matrix multiplication, average calculation, and min/max finding."

**In a new terminal:**
```cmd
REM Run the client with 50x50 matrices, 5 requests
python grpc_client.py --server localhost:50051 --size 50 --requests 5
```

**What to say:**
> "Each request calls all 3 services. Notice the total time includes network overhead and computation time. gRPC's binary format keeps overhead low."

**Point out in results:**
- Total time per request
- Server computation time
- Network overhead (very low for gRPC)

**Stop the service:**
```cmd
docker-compose -f docker-compose-grpc-single.yml down
```

---

### Part 2: Single Container HTTP (5 minutes)

**What to say:**
> "Now let's compare with HTTP using Flask and JSON. This is more traditional but we expect it to be slower due to text-based serialization."

**Commands:**
```cmd
REM Start the HTTP server
docker-compose -f docker-compose-http-single.yml up --build
```

**In a new terminal:**
```cmd
REM Run the HTTP client with same parameters
python http_client.py --server http://localhost:5000 --size 50 --requests 5
```

**What to say:**
> "Same workload, same computation, but using HTTP with JSON. Watch how the total time compares to gRPC."

**Point out:**
- Higher total time than gRPC
- Network overhead is significantly larger
- JSON serialization adds overhead

**Stop the service:**
```cmd
docker-compose -f docker-compose-http-single.yml down
```

---

### Part 3: Multi-Container gRPC - Parallel Processing (5 minutes)

**What to say:**
> "Now for the interesting part - we'll use 3 worker containers. When we send concurrent requests, each worker can handle one simultaneously, giving us parallel processing."

**Commands:**
```cmd
REM Start 3 gRPC workers
docker-compose -f docker-compose-grpc-microservices.yml up --build
```

**What to say while building:**
> "We're starting 3 independent workers on ports 50051, 50052, and 50053. This lets us process multiple requests in parallel."

**In a new terminal:**
```cmd
REM Test with the microservices client (sends to all 3 workers concurrently)
python grpc_client_microservices.py --size 100 --requests 12
```

**What to say:**
> "I'm sending 12 requests - 4 to each worker. With 3 workers processing in parallel, this should be about 3 times faster than sequential processing."

**Point out:**
- Individual worker times
- Overall speedup from parallelization
- How requests are distributed

**Stop the service:**
```cmd
docker-compose -f docker-compose-grpc-microservices.yml down
```

---

### Part 4: Multi-Container HTTP - Comparison (5 minutes)

**What to say:**
> "Let's see the same parallelization benefit with HTTP to confirm it's about architecture, not just protocol."

**Commands:**
```cmd
REM Start 3 HTTP workers
docker-compose -f docker-compose-http-microservices.yml up --build
```

**In a new terminal:**
```cmd
REM Test HTTP with microservices
python http_client_microservices.py --size 100 --requests 12
```

**What to say:**
> "Same parallel architecture, same 3x speedup, but with HTTP instead of gRPC. This confirms that parallelization is powerful regardless of protocol."

**Point out:**
- Similar speedup to gRPC multi-container
- Still slower per-request than gRPC
- Both protocols benefit from parallelization

**Stop the service:**
```cmd
docker-compose -f docker-compose-http-microservices.yml down
```

---

## Summary Points (2 minutes)

**What to say:**
> "Let me summarize what we've demonstrated:
> 
> 1. **gRPC vs HTTP**: gRPC is about 1.5x faster due to binary serialization and HTTP/2, especially visible in network overhead.
> 
> 2. **Single vs Multi-Container**: With 3 workers processing in parallel, we get close to 3x speedup for concurrent workloads.
> 
> 3. **All Services Working**: Each request exercises all three services - multiplication, average, and min/max - giving us realistic distributed computation.
> 
> 4. **Protocol Choice Matters**: For microservices, gRPC offers performance benefits, but HTTP is still valuable for browser-based APIs.
> 
> 5. **Scalability**: Both protocols scale well with multiple containers, showing that architectural decisions are as important as protocol choice."

---

## Quick Reference

### Matrix Sizes for Demo:
- **50x50**: Quick demo, ~0.01s computation
- **100x100**: Medium demo, ~0.1s computation  
- **200x200**: Longer demo, ~1s computation

### Port Mapping:
- **gRPC Single**: 50051
- **gRPC Workers**: 50051, 50052, 50053
- **HTTP Single**: 5000
- **HTTP Workers**: 5001, 5002, 5003

### Key Metrics to Highlight:
- Total time per request
- Server computation time
- Network overhead
- Speedup with multiple containers

---

## Troubleshooting During Demo

**If port already in use:**
```cmd
docker-compose -f <filename> down
```

**If containers won't start:**
```cmd
docker ps -a
docker rm -f <container-name>
```

**If client can't connect:**
- Wait 2-3 seconds for server to fully start
- Check `docker ps` to see if containers are running

---

## Backup: Local Testing (No Docker)

**If Docker fails, fall back to local:**

**Terminal 1:**
```cmd
python grpc_server.py
```

**Terminal 2:**
```cmd
python grpc_client.py --size 50 --requests 5
```

**What to say:**
> "We're running locally without Docker, but the same gRPC service is handling our matrix operations."

---

## Time Allocation

- **Part 1 (gRPC Single)**: 5 minutes
- **Part 2 (HTTP Single)**: 5 minutes  
- **Part 3 (gRPC Multi)**: 5 minutes
- **Part 4 (HTTP Multi)**: 5 minutes
- **Summary**: 2 minutes
- **Q&A Buffer**: 3 minutes

**Total: 25 minutes**

---

## Demo Tips

1. **Have terminals ready**: Pre-open 2 terminal windows
2. **Test beforehand**: Run through once to ensure everything works
3. **Don't wait for long builds**: Use smaller matrix sizes if needed
4. **Point at screen**: Highlight specific numbers in output
5. **Stay calm**: If something breaks, fall back to local testing

Good luck with your demo! 🚀
