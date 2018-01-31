// var App = () => (
//   <h1>Some a</h1>
// );
// class GroceryList extends React.Component {
//   render() {
//     return [
//       <li>potatoes</li>
//       <li>carrots</li>
//     ]
//   }
// }

// var GroceryList = () => (
//   <div><li>potatoes</li>
//   <li>carrots</li></div>
// );

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <Potatoes />
//     <Carrots />
//   </div>
// );
//
// var Potatoes = () => (
//   <div>potato</div>
// );
//
// var Carrots = () => (
//   <li>carrot</li>
// )

// var TodoList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );
//
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
//   </div>
// );

// var GroceryList = (props) => (
//   <ul>
//     <li>{props.grocery[0]}</li>
//     <li>{props.grocery[1]}</li>
//     <li>{props.grocery[2]}</li>
//   </ul>
// );
//
// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryList grocery={['potato', 'carrot', 'onion']}/>
//   </div>
// );



// var TodoList = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// };
//
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['learn React', 'Crush Recast.ly', 'Sleep maybe']}/>
//   </div>
// );
// //
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );


// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li>{this.props.todo}</li>
//     );
//   }
// }

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['carrot', 'onion', 'potato']} />
  </div>
);
//
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}
var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
    <GroceryListItem item={item} />
    )}
  </ul>
)
ReactDOM.render(<App />, document.getElementById("app"));
