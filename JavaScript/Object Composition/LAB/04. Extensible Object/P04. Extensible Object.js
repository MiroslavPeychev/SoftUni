solve = () => ({
    __proto__: {},
    extend: function (template) {
        Object.entries(template).forEach(([key, value]) => {
            typeof value === 'function' ? this.__proto__[key] = value : this[key] = value;
        });
    }
});