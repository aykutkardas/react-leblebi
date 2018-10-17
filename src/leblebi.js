import { Component, Fragment } from "react";

export default class Leblebi extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      style: {},
      result: [],
      activeItemIndex: 0
    };

    this.keyCode = {
      up: 38,
      down: 40,
      enter: 13,
      tab: 9
    };
  }

  componentWillMount() {
    const defaultStyle = {
      leblebi: {
        display: "flex",
        flexDirection: "column"
      },
      leblebiInput: {},
      leblebiResult: {
        background: "#fff",
        border: "1px solid #ccc",
        padding: 1
      },
      leblebiItem: {
        cursor: "pointer",
        padding: 6
      },
      leblebiItemActive: {
        background: "#2666b9",
        color: "#fff"
      },
      leblebiWord: {
        padding: "3px 1px 0px",
        border: "1px solid #ffd94f",
        color: "#f9a500",
        background: "#ffefd3",
        borderRadius: 2,
        fontWeight: "normal",
        margin: "0px 1px",
        boxShadow: "1px 1px 1px -1px #000000"
      }
    };

    const { style = {}, config = {} } = this.props;

    const activeStyle = config.noDefaultStyle ? {} : { ...defaultStyle };

    Object.keys(style).forEach(styleName => {
      activeStyle[styleName] = {
        ...defaultStyle[styleName],
        ...style[styleName]
      };
    });

    this.state.style = activeStyle;
  }

  handleClick = index => {
    const { result } = this.state;
    const value = result[index].raw;
    this.setState({
      result: [],
      value
    });
  };

  handleHover = (index = -1) => {
    this.setState({
      activeItemIndex: index
    });
  };

  handleChange = ({ target }) => {
    const { value } = target;
    const { style } = this.state;
    const { data = [], config = {}, classNames = {} } = this.props;
    const { field = false, limit = 10 } = config;

    const LeblebiItems = [];

    const lang = config.lang || undefined;
    data.forEach(item => {
      let activeItem = item.toLocaleLowerCase(lang);
      if (field) {
        activeItem = item[field].toLocaleLowerCase(lang);
      }

      const wordStartIndex = activeItem.indexOf(value.toLocaleLowerCase(lang));
      const wordEndIndex = wordStartIndex + value.length;
      const check = wordStartIndex > -1;

      if (check) {
        const key = item.slice(wordStartIndex, wordEndIndex);
        const leblebiWordStyle = this.objectToInlineStyle(style.leblebiWord);
        const className = `leblebi-word${` ${classNames.leblebiWord || ""}`}`;
        const custom = item.replace(
          key,
          `<span class="${className}" style="${leblebiWordStyle}">${key}</span>`
        );

        LeblebiItems.push({
          raw: item,
          custom
        });
      }

      return false;
    });

    const result = value.length ? LeblebiItems.slice(0, limit) : [];
    this.setState({
      result,
      activeItemIndex: -1,
      value
    });

    return null;
  };

  handleKeyDown = event => {
    const { result } = this.state;
    const { tab } = this.keyCode;
    const { keyCode } = event;

    if (keyCode === tab && result.length) {
      event.preventDefault();
    }
    return false;
  };

  handleKeyUp = event => {
    const { keyCode } = event;
    const { up, down, enter, tab } = this.keyCode;

    const { activeItemIndex, result } = this.state;
    const lastIndex = result.length - 1;

    if (keyCode === up) {
      if (activeItemIndex > 0) {
        this.setState(prevState => ({
          activeItemIndex: prevState.activeItemIndex - 1
        }));
      } else {
        this.setState({
          activeItemIndex: lastIndex
        });
      }
      return null;
    }

    if (keyCode === down) {
      if (activeItemIndex < lastIndex) {
        this.setState(prevState => ({
          activeItemIndex: prevState.activeItemIndex + 1
        }));
      } else {
        this.setState({
          activeItemIndex: 0
        });
      }
      return null;
    }

    if ((keyCode === enter || keyCode === tab) && activeItemIndex > -1) {
      event.preventDefault();
      const value = result[activeItemIndex].raw;
      this.setState({
        activeItemIndex: -1,
        result: [],
        value
      });
    }

    return null;
  };

  objectToInlineStyle = (obj = {}) => {
    let inlineStyle = "";
    Object.keys(obj).forEach(name => {
      const cebabCaseName = name
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, "-")
        .toLowerCase();
      const value =
        typeof obj[name] === "number" ? `${obj[name]}px` : obj[name];
      inlineStyle += `${cebabCaseName}:${value};`;
    });

    return inlineStyle;
  };

  render() {
    const { style, value, result, activeItemIndex } = this.state;

    const { classNames = {} } = this.props;
    return (
      <Fragment>
        <div
          className={`leblebi ${classNames.leblebi || ""}`}
          style={style.leblebi}
        >
          <input
            className={`leblebi-input ${classNames.leblebiInput || ""}`}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onKeyUp={this.handleKeyUp}
            value={value}
            type="text"
            style={style.leblebiInput}
          />
          {result.length > 0 && (
            <div
              className={`leblebi-result ${classNames.leblebiResult || ""}`}
              style={style.leblebiResult}
            >
              {result.map((item, index) => {
                let activeStyle = {};
                let className = `leblebi-item ${classNames.leblebiItem || ""}`;
                if (activeItemIndex === index) {
                  activeStyle = style.leblebiItemActive;
                  className += ` leblebi-item-active ${classNames.leblebiItemActive ||
                    ""}`;
                }

                return (
                  <div
                    key={item.raw}
                    index={index}
                    className={className}
                    onClick={() => this.handleClick(index)}
                    onFocus={() => this.handleHover(index)}
                    onBlur={() => this.handleHover()}
                    onMouseOver={() => this.handleHover(index)}
                    onMouseOut={() => this.handleHover()}
                    style={{ ...activeStyle, ...style.leblebiItem }}
                    dangerouslySetInnerHTML={{ __html: item.custom }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
