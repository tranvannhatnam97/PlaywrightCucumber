class TreeNode<T> {
  ID: number;
  name: string;
  parentID: number;
  children: TreeNode<T>[];

  constructor(ID: number, name: string, parentID: number | null) {
    this.ID = ID;
    this.name = name;
    this.parentID = parentID;
    this.children = [];
  }

  addChild(child: TreeNode<T>): void {
    child.parentID = this.ID;
    this.children.push(child);
  }
}
