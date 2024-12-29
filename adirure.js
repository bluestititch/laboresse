const outer = {
    name: "parent",
    children: [
        { /* child objects */ },
        { /* more child objects */ }
    ]
};

const inner = {
    name: "child"
};

// Assign post_meta_key for inner object
inner.post_meta_key = outer.name + "_" + (outer.children.length - 1) + "_" + inner.name;
