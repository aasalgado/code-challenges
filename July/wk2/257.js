// 257. Binary Tree Paths

var binaryTreePaths = function(root) {
    if(!root) {
        return [];
    }

    const result = [];

    function findPath(node, currentPath) {
        currentPath += node.val;

        if(!node.left && !node.right) {
            result.push(currentPath);
        }

        if(node.left) {
            findPath(node.left, currentPath + "->");
        }

        if(node.right) {
            findPath(node.right, currentPath + "->");
        }
    }

    findPath( root, "");
    return result;
};