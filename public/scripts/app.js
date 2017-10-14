'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleRemoveAllOptions = _this.handleRemoveAllOptions.bind(_this);
        _this.handleActionClick = _this.handleActionClick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //do not do anything.
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length != this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
        // componentWillUnmount(){

        // }

    }, {
        key: 'handleRemoveAllOptions',
        value: function handleRemoveAllOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleRemoveOption',
        value: function handleRemoveOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optionToRemove;
                    })
                };
            });
        }
    }, {
        key: 'handleActionClick',
        value: function handleActionClick() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Please enter option before submit';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exists.';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision Application';
            return React.createElement(
                'div',
                null,
                'Running',
                React.createElement(Header, { title: title }),
                React.createElement(Action, { handleActionClick: this.handleActionClick, optionsLength: this.state.options.length }),
                React.createElement(Options, { options: this.state.options,
                    handleRemoveAllOptions: this.handleRemoveAllOptions,
                    handleRemoveOption: this.handleRemoveOption }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        )
    );
};

Header.defaultProps = {
    title: 'Default'
};
// class Header extends React.Component{
//     render()
//     {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//             </div>
//         );
//     }
// }

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: props.optionsLength < 1, onClick: props.handleActionClick },
            'What should I do?'
        )
    );
};
// class Action extends React.Component{
//     render(){
//         return(
//             <div>
//                 <button disabled={(this.props.optionsLength < 1)} onClick={this.props.handleActionClick}>What should I do?</button>
//             </div>
//         );
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRemoveAllOptions },
            'Remove All'
        ),
        props.options.length,
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleRemoveOption: props.handleRemoveOption });
        })
    );
};

// class Options extends React.Component{

//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handleRemoveAllOptions}>Remove All</button>
//                 {this.props.options.length}
//                 {
//                     this.props.options.map((option) =>  <Option key={option} optionText={option} />)

//                 }
//             </div>
//         );
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    props.handleRemoveOption(props.optionText);
                } },
            'Remove'
        )
    );
};

// class Option extends React.Component{
//     render(){
//         return(
//             <div>{this.props.optionText}</div>
//         );
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleOnSubmit = _this2.handleOnSubmit.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleOnSubmit',
        value: function handleOnSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var errors = this.props.handleAddOption(option);
            this.setState(function () {
                return {
                    error: errors
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleOnSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var app = ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
