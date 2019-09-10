import React, { Component } from "react";
import './directory.styles.scss'
import MenuItem from "../menu_item/MenuItem.component";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        {
          id: 1,
          title: "React Js",
          imgUrL: "https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"
        },
        {
          id: 2,
          title: "React Native",
          imgUrL: "https://i.udemycdn.com/course/240x135/1436092_2024_3.jpg"
        },
        {
          id: 3,
          title: "Angular 2+",
          imgUrL: "https://i.udemycdn.com/course/240x135/1512962_9f57.jpg"
        },
        {
          id: 4,
          title: "Vue Js",
          imgUrL: "https://i.udemycdn.com/course/240x135/995016_ebf4.jpg",
          size:'xl'
        },
        {
          id: 5,
          title: "Golang",
          imgUrL: "https://i.udemycdn.com/course/240x135/1556312_18c2_8.jpg",
          size:'xl'
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.topics.map(({ id, title,imgUrL,size }) => (
          <MenuItem key={id} title={title} imgUrL={imgUrL} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
