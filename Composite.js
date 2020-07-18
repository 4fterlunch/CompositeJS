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
}

Object.defineProperties(Composite, {
  name: {
    value: ""
  },
  children: {
    value: []
  }
});

Object.assign(Composite.prototype, {
  update() {
    return this;
  },
  add(child) {
    this.children.add(child);
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

export {Composite}