## 트리

* 방향 그래프의 일종으로 정점을 가리키는 간선이 하나 밖에 없는 구조
* 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가짐
* 정점이 N개인 트리는 반드시 N-1개의 간선을 가짐

#### 용어정리
* Root: 트리의 최상위 노드
* Leaf Node: 하위에 Child가 없는 노드
* Edge: 한 노드와 다른 노드간의 연결

### 이진트리
* 각 정점이 최대 2개의 자식을 가지는 트리
#### 시간 복잡도
* 추가: O(log N)
* 제거: O(log N)

