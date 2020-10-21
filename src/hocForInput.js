import React, {Component} from 'react';
export default function withMedia(HoccedComponent){
    return class extends Component{
      constructor(props) {
      super(props);
      this.state = {
        media: null
      };
    }
    componentDidMount() {
      this.setState({
        media: getWindowWidth()
      })
    }
    getWindowWidth() {
      // пусть тут будет самая примитивная функция, каким-либо образом считающая ширину
      if (window.innerWidth > 1024) {
        return 'desktop'
      }
      if (window.innerWidth < 1024) {
        return 'mobile'
      }
      return 'вы сидите с утюга'
    }
    render() {
        return (
            <div>
              <HoccedComponent media={this.state.media} {...this.props}/>
            </div>
        );
    }
  }
}