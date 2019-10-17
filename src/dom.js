window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //style(div,color,red)
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // style(div,'color')
                return node.style[name]
            } else if (typeof name === 'object') {
                //style(div,{color:red})
                let object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(divList, fn) {
        for (let i = 0; i < divList.length; i++) {
            fn.call(null, divList[i])
        }
    }
}