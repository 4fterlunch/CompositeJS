/**
 * @author Michael Holmes / https://github.com/4fterlunch
 * @version 1.0.0
 * @description Useful composite object for creating composite pattern
 *              objects.
 */

var UID = 0;

/**
 * Composite object
 * @param {{}} optional props param
 */
function Composite(props) {
  this.props = props || {};
  this.uid = UID++;
  this.name = this.props.name || "";
  this.children = [];
  this.parent = null;
}

Object.assign(Composite.prototype, {
  update() {
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
    return this.children.find(function(child) {
      return child.name === name;
    })
  }
});

/**
 * @description Functional composition method to add Composite to any object
 * @param {*} obj 
 */
function addComposite(obj) {
  Object.assign(obj, new Composite);
  obj.prototype = Object.assign(Composite.prototype);
}

export {Composite, addComposite}