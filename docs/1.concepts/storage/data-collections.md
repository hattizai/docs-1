---
id: data-storage
title: "Data Storage / Collections"
sidebar_label: Storage on NEAR
---

## Overview {#overview}

> All data stored on the NEAR blockchain is done in key / value pairs. There are several collection methods in the SDKs we've created that will help you store your data on chain.
>
> - [`near-sdk-as`](https://github.com/near/near-sdk-as) for [AssemblyScript](https://www.assemblyscript.org/) smart contracts
> - [`near-sdk-rs`](https://github.com/near/near-sdk-rs) for [Rust](https://www.rust-lang.org/) smart contracts

For information on storage costs, please see [ **[storage staking](/concepts/storage/storage-staking)** ].

---

## AssemblyScript Collection Types {#assemblyscript-collection-types}

[`near-sdk-as`](https://github.com/near/near-sdk-as/tree/master/sdk-core/assembly/collections)

| Type                                                                           | Iterable | Clear All Values | Preserves Insertion Order | Range Selection |
| ------------------------------------------------------------------------------ | :------: | :--------------: | :-----------------------: | :-------------: |
| [`PersistentVector`](/concepts/storage/data-storage#persistentvector)             |    ✅     |        ✅         |             ✅             |        ✅        |
| [`PersistentSet`](/concepts/storage/data-storage#persistentset)                   |    ✅     |        ✅         |             ✅             |        ✅        |
| [`PersistentMap`](/concepts/storage/data-storage#persistentmap)                   |          |                  |                           |                 |
| [`PersistentUnorderedMap`](/concepts/storage/data-storage#persistentunorderedmap) |    ✅     |        ✅         |             ✅             |        ✅        |
| [`PersistentDeque`](/concepts/storage/data-storage#persistentdeque)               |          |        ✅         |                           |        ✅        |
| [`AVLTree`](/concepts/storage/data-storage#avltree)                               |    ✅     |        ✅         |                           |                 |

---

### Big-O Notation {#big-o-notation}

> The [Big-O notation](https://en.wikipedia.org/wiki/Big_O_notation) values in the chart below describe the [time complexity](https://en.wikipedia.org/wiki/Time_complexity) of the various collection methods found in `near-sdk-as`. These method complexities correlate with [gas](/concepts/basics/transactions/gas) consumption on NEAR, helping you decide which collection to utilize in your project. There are three types found in our collection methods:

- O(1) - _[constant](https://en.wikipedia.org/wiki/Time_complexity#Constant_time)_
- O(n) - _[linear](https://en.wikipedia.org/wiki/Time_complexity#Linear_time)_
- O(log n) - _[logarithmic](https://en.wikipedia.org/wiki/Time_complexity#Logarithmic_time)_

| Type                                                                           |  Access  |  Insert  |  Delete  |  Search  | Traverse | Clear |
| ------------------------------------------------------------------------------ | :------: | :------: | :------: | :------: | :------: | :---: |
| [`PersistentVector`](/concepts/storage/data-storage#persistentvector)             |   O(1)   |  O(1)\*  | O(1)\*\* |   O(n)   |   O(n)   | O(n)  |
| [`PersistentSet`](/concepts/storage/data-storage#persistentset)                   |   O(1)   |   O(1)   |   O(1)   |   O(1)   |   O(n)   | O(n)  |
| [`PersistentMap`](/concepts/storage/data-storage#persistentmap)                   |   O(1)   |   O(1)   |   O(1)   |   O(1)   |   N/A    |  N/A  |
| [`PersistentUnorderedMap`](/concepts/storage/data-storage#persistentunorderedmap) |   O(1)   |   O(1)   |   O(1)   |   O(1)   |   O(n)   | O(n)  |
| [`PersistentDeque`](/concepts/storage/data-storage#persistentdeque)               |   O(1)   |  O(1)\*  | O(1)\*\* |   O(1)   |   O(n)   | O(n)  |
| [`AVLTree`](/concepts/storage/data-storage#avltree)                               | O(log n) | O(log n) | O(log n) | O(log n) |   O(n)   | O(n)  |

 _\* - to insert at the end of the vector using `push_back` (or `push_front` for deque)_

 _** - to delete from the end of the vector using `pop` (or `pop_front` for deque), or delete using `swap_remove` which swaps the element with the last element of the vector and then removes it._

---

### Gas Consumption Examples {#gas-consumption-examples}

> The examples below show differences in gas burnt storing and retrieving key/value pairs using the above methods. Please note that the gas cost of spinning up the runtime environment on chain has been deducted to show just data read/writes.
>
> You can reproduce this and test out your own data set by visiting [collection-examples-as](https://github.com/near-examples/collection-examples-rs).

![AssemblyScript Set Data Gas Chart](/docs/assets/as-setData-gasBurnt.png)

![AssemblyScript Get Data Gas Chart](/docs/assets/as-getData-gasBurnt.png)

---

### `PersistentVector` {#persistentvector}

> Implements a [vector](https://en.wikipedia.org/wiki/Array_data_structure) / persistent array built on top of the [`Storage`](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/storage.ts) class.
>
> Uses the following map: index -> element.

- To create:

```ts
import { PersistentVector } from "near-sdk-as";
let vector = new PersistentVector<string>("v"); // choose a unique prefix per collection
```

- To use:

```ts
vector.push(value);
vector.pop(value);
vector.length;
```

[ [SDK source](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/collections/persistentVector.ts) ]

---

### `PersistentSet` {#persistentset}

> Built on top of the [`Storage`](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/storage.ts) class, this implements a persistent set without iterators.
>
> - is not iterable
> - more efficient in the number of reads and writes

[ [SDK source](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/collections/persistentSet.ts) ]

---

### `PersistentMap` {#persistentmap}

> Implements a map built on top of the [`Storage`](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/storage.ts).

- To create:

```ts
import { PersistentMap } from "near-sdk-as";
let map = new PersistentMap<string, string>("pmap"); // choose a unique prefix per collection
```

- To use:

```ts
map.set(key, value);
map.getSome(key);
```

**Note:** The Map doesn't store keys, so if you need to retrieve them, include keys in the values.

[ [SDK source](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/collections/persistentMap.ts) ]

---

### `PersistentUnorderedMap` {#persistentunorderedmap}

> Implements an unordered map built on top of the [`PersistentMap`](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/collections/persistentMap.ts) class and a [`PersistentVector`](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/collections/persistentVector.ts), which stores the keys of the map. These keys are initially in the order they are inserted, however, a deleted key is swapped with the last key.

- To create:

```ts
import { PersistentUnorderedMap } from "near-sdk-as";
let map = new PersistentUnorderedMap<string, string>("umap"); // note the prefix must be unique per collection
```

- To use:

```ts
map.set(key, value);
map.getSome(key);
```

[ [SDK source](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/collections/persistentUnorderedMap.ts) ]

---

### `PersistentDeque` {#persistentdeque}

> Built on top of the [`Storage`](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/storage.ts) class, this implements a persistent bidirectional queue / double-ended queue / deque.

- To create:

```ts
import { PersistentDeque } from "near-sdk-as";
let dq = new PersistentDeque<string>("deque"); // choose a unique prefix per collection
```

- To use:

```ts
dq.pushFront(value);
dq.popBack();
```

[ [SDK source](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/collections/persistentDeque.ts) ]

---

### `AVLTree` {#avltree}

> Implements a Tree Map based on [AVL-tree](https://en.wikipedia.org/wiki/AVL_tree)
> Keys are ordered and iterable.

- To create:
 
```ts
import { AVLTree } from "near-sdk-as";
map = new AVLTree<string, string>("avl"); // choose a unique prefix per account
```

- To use:

```ts
map.set(key, value);
map.getSome(key)
```

[ [SDK source](https://github.com/near/near-sdk-as/blob/master/sdk-core/assembly/collections/avlTree.ts) ]

---

## Rust Collection Types {#rust-collection-types}

[`near-sdk-rs` module documentation](https://docs.rs/near-sdk/latest/near_sdk/collections/)

| Type                                                       | Iterable | Clear All Values | Preserves Insertion Order | Range Selection |
| ---------------------------------------------------------- | :------: | :--------------: | :-----------------------: | :-------------: |
| [`Vector`](/concepts/storage/data-storage#vector)             |    ✅     |        ✅         |             ✅             |        ✅        |
| [`LookupSet`](/concepts/storage/data-storage#lookupset)       |          |                  |                           |                 |
| [`UnorderedSet`](/concepts/storage/data-storage#unorderedset) |    ✅     |        ✅          |                          |        ✅        |
| [`LookupMap`](/concepts/storage/data-storage#lookupmap)       |          |                  |                           |                 |
| [`UnorderedMap`](/concepts/storage/data-storage#unorderedmap) |    ✅     |        ✅         |                          |        ✅        |
| [`TreeMap`](/concepts/storage/data-storage#treemap)           |    ✅     |        ✅         |                           |                 |

---

### Big-O Notation {#big-o-notation-1}

> The [Big-O notation](https://en.wikipedia.org/wiki/Big_O_notation) values in the chart below describe the [time complexity](https://en.wikipedia.org/wiki/Time_complexity) of the various collection methods found in `near-sdk-rs`. These method complexities correlate with [gas](/concepts/basics/transactions/gas) consumption on NEAR, helping you decide which collection to utilize in your project. There are three types found in our collection methods:

- O(1) - _[constant](https://en.wikipedia.org/wiki/Time_complexity#Constant_time)_
- O(n) - _[linear](https://en.wikipedia.org/wiki/Time_complexity#Linear_time)_
- O(log n) - _[logarithmic](https://en.wikipedia.org/wiki/Time_complexity#Logarithmic_time)_
  
| Type                                                       |  Access  |  Insert  |  Delete  |  Search  | Traverse | Clear |
| ---------------------------------------------------------- | :------: | :------: | :------: | :------: | :------: | :---: |
| [`Vector`](/concepts/storage/data-storage#vector)             |   O(1)   |  O(1)\*  | O(1)\*\* |   O(n)   |   O(n)   | O(n)  |
| [`LookupSet`](/concepts/storage/data-storage#lookupset)       |   O(1)   |   O(1)   |   O(1)   |   O(1)   |   N/A    |  N/A  |
| [`UnorderedSet`](/concepts/storage/data-storage#unorderedset) |   O(1)   |   O(1)   |   O(1)   |   O(1)   |   O(n)   | O(n)  |
| [`LookupMap`](/concepts/storage/data-storage#lookupmap)       |   O(1)   |   O(1)   |   O(1)   |   O(1)   |   N/A    |  N/A  |
| [`UnorderedMap`](/concepts/storage/data-storage#unorderedmap) |   O(1)   |   O(1)   |   O(1)   |   O(1)   |   O(n)   | O(n)  |
| [`TreeMap`](/concepts/storage/data-storage#treemap)           | O(log n) | O(log n) | O(log n) | O(log n) |   O(n)   | O(n)  |

 _\* - to insert at the end of the vector using `push_back` (or `push_front` for deque)_

 _** - to delete from the end of the vector using `pop` (or `pop_front` for deque), or delete using `swap_remove` which swaps the element with the last element of the vector and then removes it._

---

### Gas Consumption Examples {#gas-consumption-examples-1}

> The examples below show differences in gas burnt storing and retrieving key/value pairs using the above methods. Please note that the gas cost of spinning up the runtime environment on chain has been deducted to show just data read/writes.
>
> You can reproduce this and test out your own data set by visiting [collection-examples-rs](https://github.com/near-examples/collection-examples-rs).

![Rust Set Data Gas Chart](/docs/assets/rust-setData-gasBurnt.png)


![Rust Get Data Gas Chart](/docs/assets/rust-getData-gasBurnt.png)

---

### `Vector` {#vector}

> Implements a [vector](https://en.wikipedia.org/wiki/Array_data_structure) / persistent array.
>
> - can iterate using index
> - Uses the following map: index -> element.

[ [SDK source](https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/vector.rs) ]

[ [Implementation](https://docs.rs/near-sdk/latest/near_sdk/collections/vector/struct.Vector.html) ]

---

### `LookupSet` {#lookupset}

> Implements a persistent set _without_ iterators.
>
> - can not iterate over keys
> - more efficient in reads / writes

[ [SDK source](https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/lookup_set.rs) ]

[ [Implementation](https://docs.rs/near-sdk/latest/near_sdk/collections/struct.LookupSet.html) ]

---

### `UnorderedSet` {#unorderedset}

> Implements a persistent set _with_ iterators for keys, values, and entries.

[ [SDK source](https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/unordered_set.rs) ]

[ [Implementation Docs](https://docs.rs/near-sdk/latest/near_sdk/collections/struct.UnorderedSet.html) ]

---

### `LookupMap` {#lookupmap}

> Implements a persistent map.
>
> - can not iterate over keys
> - does not preserve order when removing and adding values
> - efficient in number of reads and writes

- To add data:

```rust
pub fn add_lookup_map(&mut self, key: String, value: String) {
    self.lookup_map.insert(&key, &value);
}
```

- To get data:

```rust
pub fn get_lookup_map(&self, key: String) -> String {
    match self.lookup_map.get(&key) {
        Some(value) => {
            let log_message = format!("Value from LookupMap is {:?}", value.clone());
            env::log(log_message.as_bytes());
            value
        },
        None => "not found".to_string()
    }
}
```

[ [SDK source](https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/lookup_map.rs) ]

[ [Implementation](https://docs.rs/near-sdk/latest/near_sdk/collections/struct.LookupMap.html) ]

---

### `UnorderedMap` {#unorderedmap}

> Implements an unordered map.
>
> - iterable
> - does not preserve order when removing and adding values
> - is able to clear all values

- To add data:

```rust
pub fn add_unordered_map(&mut self, key: String, value: String) {
    self.unordered_map.insert(&key, &value);
}
```

- To get data:

```rust
pub fn get_unordered_map(&self, key: String) -> String {
    match self.unordered_map.get(&key) {
        Some(value) => {
            let log_message = format!("Value from UnorderedMap is {:?}", value.clone());
            env::log(log_message.as_bytes());
            value
        },
        // None => "Didn't find that key.".to_string()
        None => "not found".to_string()
    }
}
```

[ [SDK source](https://github.com/near/near-sdk-rs/tree/master/near-sdk/src/collections/unordered_map) ]

[ [Implementation](https://docs.rs/near-sdk/latest/near_sdk/collections/unordered_map/struct.UnorderedMap.html) ]

---

### `TreeMap` {#treemap}

> Implements a Tree Map based on [AVL-tree](https://en.wikipedia.org/wiki/AVL_tree).
>
> - iterable
> - preserves order
> - able to clear all values
> - self balancing

- To add data:

```rust
pub fn add_tree_map(&mut self, key: String, value: String) {
    self.tree_map.insert(&key, &value);
}
```

- To get data:

```rust
pub fn get_tree_map(&self, key: String) -> String {
    match self.tree_map.get(&key) {
        Some(value) => {
            let log_message = format!("Value from TreeMap is {:?}", value.clone());
            env::log(log_message.as_bytes());
            // Since we found it, return it (note implicit return)
            value
        },
        // did not find the entry
        // note: curly brackets after arrow are optional in simple cases, like other languages
        None => "not found".to_string()
    }
}
```

[ [SDK source](https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/tree_map.rs) ]

[ [Implementation](https://docs.rs/near-sdk/latest/near_sdk/collections/struct.TreeMap.html) ]