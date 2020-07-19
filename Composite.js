/**
 * @author Michael Holmes / https://github.com/4fterlunch
 * @version 1.0.0
 * @description Useful composite mixin object for adding composite pattern
 *              functionality to a js object
 */

var UID = 0;
/**
 * @description A composite mixin component
 * @example basic usage: var a = CompositeMixin("myComposite")(myObject);
 * @example advanced usage: use a factory function for composition
 * @param {string} optional name
 */
const CompositeMixin = ({ name = "" } = {}) => (obj) => {
  let uid = UID++;
  let children = [];
  let parent = null;

  return {
    ...obj,
    name,
    uid: uid,
    children: children,
    parent: parent,
    update() {
      for (var i = 0; i < this.children.length; i++) this.children[i].update();
      return this;
    },
    add(child) {
      child.parent = this;
      this.children.push(child);
      return this;
    },
    remove(child) {
      this.children.splice(this.children.indexOf(child));
      return this;
    },
    getChildByName(name) {
      return this.children.find(function (child) {
        return child.name === name;
      });
    },
  };
};
