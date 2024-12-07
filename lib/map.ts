import { MapTy } from '../types';
import { RedBlackTree } from './red-black-tree';


export class Map<K, V> implements MapTy<K, V> {
  private rbTree: RedBlackTree<K, V>;

  constructor() {
    this.rbTree = new RedBlackTree<K, V>();
  }

  insert(key: K, value: V): void {
    this.rbTree.insert(key, value);
  }

  find(key: K): V | undefined {
    return this.rbTree.find(key);
  }

  delete(key: K): void {
    this.rbTree.remove(key);
  }

  clear(): void {
    this.rbTree.clear();
  }

  size(): number {
    return this.rbTree.size();
  }

  empty(): boolean {
    return this.rbTree.empty();
  }
}
