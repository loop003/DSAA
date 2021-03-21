const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};


function preorder (root) {
  if (!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}


function inorder (root) {
  if (!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}

function postorder(root) {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}

preorder (root)
console.log("=====================================")
inorder (root)
console.log("=====================================")
postorder (root)