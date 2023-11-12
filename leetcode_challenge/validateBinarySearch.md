# Solution the Leetcode Challenge - Validate Binary Search Tree

```
class Solution {
    public boolean isValidBST(TreeNode root) {
        return validateBST(root, null, null);
    }
    
    private boolean validateBST(TreeNode node, Integer lowerBound, Integer upperBound) {
        if (node == null) {
            return true;
        }
        
        if ((lowerBound != null && node.val <= lowerBound) || (upperBound != null && node.val >= upperBound)) {
            return false;
        }
       
        return validateBST(node.left, lowerBound, node.val) && validateBST(node.right, node.val, upperBound);
    }
}
```
