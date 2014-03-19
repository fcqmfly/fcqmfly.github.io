var headroom = new Headroom(elem, {
    "tolerance": 5,
    "offset": 205,
    "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
    }
});
headroom.init();
