var deleteNode = function(arr,node) {
    node.val=node.next.val
    node.next = node.next.next

    
};

const result= deleteNode([4,5,1,9],1)
console.log(result)