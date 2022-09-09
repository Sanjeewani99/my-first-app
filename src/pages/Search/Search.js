import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  StatusBar,
  TextInput,
  Image,
} from "react-native";

import { FlatList } from "react-native-gesture-handler";
const image = {
  uri: "https://i.pinimg.com/originals/fe/e5/ea/fee5eab30a698c169dc4fd5752359c2c.jpg",
};

export default class SearchBooks extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }

  componentDidMount() {
    var data = [
      {
        name: 'Life of Pi ',
        author: "Author Name: Yann Martel",
        img: "https://images-na.ssl-images-amazon.com/images/I/51rxEvLljUL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        description:"Life of Pi Paperback – Black & White",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "The Three Musketeers Paperback",
        author: "Alexandre Dumas",
        img: "https://images-na.ssl-images-amazon.com/images/I/41TxXqToCCL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        description:"A historical Romance",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "The Call of the Wild",
        author: "Jack London",
        img: "https://images-na.ssl-images-amazon.com/images/I/41JNWeZqnsL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        description:"short adventure novel by Jack London",
        press: () => this.props.navigation.navigate(""),
      },


      {
        name: 'The Help Hardcover',
        author: "Kathryn Stockett",
        img: "https://images-na.ssl-images-amazon.com/images/I/51c06W6w5bL.jpg",
        description:"The Help is not inspired by a true story",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "One Hundred Years of Solitude",
        author: "Gabriel Garcia Marquez",
        img: "https://m.media-amazon.com/images/P/0060883286.01._SCLZZZZZZZ_SX500_.jpg",
        description:"Memory and the past",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "Memoirs of a Geisha",
        author: "Arthur Golden",
        img: "https://images-na.ssl-images-amazon.com/images/I/51O9HqW8ZAL._SX322_BO1,204,203,200_.jpg",
        description:"Many trials she faces on the path",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "The Testaments",
        author: "Margaret Atwood",
        img: "https://m.media-amazon.com/images/P/0385543786.01._SCLZZZZZZZ_SX500_.jpg",
        description:"The Sequel to The Handmaid Tale Hardcover",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "The Hunger Games Trilogy",
        author: "Suzanne Collins",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUTEhMWExUXGBcYFxgXGBcYGxkZGhkWGBgaHhYYHiggGBomIRUWITEmJSkrLi4uGx8zODMtNygtLisBCgoKDg0OGxAQGy8mICYvLzAyNTUtLS0tLS8tLy8tLS01LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARAAuQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcBBAYDAgj/xABLEAABAwIDBQUEBAkLAgcAAAABAAIDBBEFEiEGEzFBUQciYXGBFDKRoRVCscEjNFJicnOSstEXJDVDU1R0gpPS8DPxCBYmY7PC4v/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMFBAb/xAA2EQABAwIEBAMHAwMFAAAAAAABAAIRAyEEEjFBUWGx8BOBoQUUInGRwdEjMuFSYvEVM0Kiwv/aAAwDAQACEQMRAD8ApNEW9hOHGdxaHBthck6/JCQBJV6VN1V4YwSStFFK4rgpgYH5w8E20FvvX2/AyJ2w5xdzS69uHHS1/BVFRsTPYW5wOIDshbe24/5WG+5UOil8PwUyl43gbkdl1HHjrx8F84tgpgDTnDsxIAAt96eI2cs3Q4GuKRqlvw8ZGxjjOqikXQnZZ39q29r2t991HUuHF8D5Qfd+rbjwJ1UCqw6FTUwGIpnK5l4J20Gu+3DVR6KQlwwgQnMPwvDT3eHjrxWx9BO3+4Lx7uYOtxHldSajRv2FUYKuTAbeQNtXCRvuFDopbCcFM7S7OG2NtRm5A9fFauK0O4fkzB2gNwLcVIe0uyzdVdhazaQrFvwnQ239Vpot7CMNM7iA4NsLknX5LYxTBDAwPzh4vbQW6+PgoztzZZupbhKzqRrBvwje22vNRKLoYdmHOa0mVrbgG1r8fG60aPCS98jMwaYwb6XvY2UCqwzdaO9n4lpaCz92lxwnja3FRiL7hjzOa3hcgfE2WzitEYZCwnNYA3tbj4K8iYXmFNxYakWBjzOi00W/Nh5bTsnzaOcW5bcLFw4/5VsVeCmJ8bc4Ik0BtwOnK/iq529fTVa+6VonLs07aOMN339N4UQilYsGLqh0IcO6Ll1vLl6r0xLATDGZN4HgEA2FuOnVPEbIEq3uOIyOfls2Z0tFjvsoZERXXkRTey0zWyPDnBuZlhfzUIpXZ/dF7hNlsW6Zr2B9OapU/YV7PZ5IxLCI1300Oq9sXoDFTtyzbyPN7oAtm11uPVS0349D+qP2PUZjBiZTNijlElnE8vHp5qY3lO6Vkxms4CwGYWtqNRa9+8V5nExJ/u2XcoMYKpY0gR4RjNIGUkkAkmwG3RcyKYy1JYNbyG/lc3PwW1tDUh04YPdjs0eel/uHotnZ+aISzSOeG3PdzdCSSdfRauK0cLMro5d4S/vXIPjfQLXN8cHYdV4HUT7o57CPicSbicoMAcdZPyXTCjd7QZrjKWZLc+I/gorZVw9nIdwdIGftCy9mVjPbHu3jcu6Avc2vcfNQ9HUhtG4BwDxI1zRz0LdVi1pLYP8Ab911K2Ip064qCIHjHWZ/b1iw9Vv4rDu3UbD9UkfAsU1uw6ZrxxjzRu9QHf8APNQeM1rJH0zg4cbu/NuWcenArbo8SYKmYF7criHNPK4bY/8APBQ5ri0HkeqtRrUmV3NkQXsAuNmAg/8AWJ8lpYFAJKaVrnZAXt73TVqhK6AMkc0OzAGwPVTGCGJ1PJHK8MDng8QDoR18lGYrBHG/LE7O2wN7g68+AC9DD+o4c/JcXFMBwlF4As0CZ+Le2Xhz1Ujsnxn/AFf8VEmvcYRDplBvw1vrz9VJbMVDGOeHuDczbAle2LiFlM2OOQPOa99Cba3uR5qJioQRrCt4Zfgmua8DK2pPEy4ENiZvCkJ/xik/QP7oWvhX4zV+T/tW5HLTvdDIZsrmNsBcDiLG4Iuo7CKqPf1BLw1r72JNr3ddYAEtNtv/AFK6z8ra7HZhd5IuNPCi/C6gKL32fpN+0KT2r/GHeTf3QlbSQxPiMcmcZu/qNLFvT1UjjVPTy55d9d1tAC2xIFh4rcvGcO5fdcqnhHjD1KMjMHNOo0yk6766LTrP6Pg/Td+9IuiqoxIWt+tG6OT0/wCwcuaqpmmhiZmGYPJI5jvSfxCk34kxtU0hwLHRhrjyB1P2/asnsJ04uPRdDC16bIzEQWUR6OHoYngvmkqGsr5S4htwAL9e4fuK1cQw4xU5yT548wzNAAF7jmOfBZikhdWSGQtLCNCb2v3efxX1XCGKkdEyUSEuBHC/EX4cu6rXDhE7bd3WLsr6VQuywDVg5ocCTpANw7zttdc4iIvUvnUWFlERYRZREWEWURFhFlERYRZREWEWURFhFlERYRZREWEWURIWEWURFhFlERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERdJsXslLiMuVt2RNP4SUi4bzsOrj0VKlRtNpe8wApAJMBc2i6TafZiSGtmp6eKWRjHANIBebFoOpaLX1Wu3Y+vIuKOb9gqPGZAMi99UgqDRSNVgVVFrJTzMA4kxut8bKOVwQRIUIiIpRERERERERERERERERERERERERERERERd7sDsVvwKmpH4L+rYf6wjmfzPt8uONeuyiwvebdeS0p03VHZWqE2b2QnrO+LRxf2jufg1vFx+Xiru2aoY6aFkEejWjU83Hm4+J4rRqpAHNY3S3IDQDpblot6mfr4fcvl/aWIfiWwbDUDvXuF2cPhmUxzKi9pcfghmcJJwzh3QSeXQKCO3FF/au/ZcuN7UGgYhIRbvNjOn6NtfHT7FyS62G9nUn0WOJNwOi8dTGPY4tAFrK7qDaumfoypsehJatqtwelqwTNBFKT/WNAY/8A1GWv63VDqRwvG56Y3ikLfA6j4K59mlhzUXkHvcKvvjX2qN775rq9pezqSIGSkc6dg1LHWErR4W0kHlr4LgyFb2y227Kq0clo5fk7yPVfO2WyArM0sDbVIFyBoJgOR6SW4HnwPVTRxlSm/wALECDx76qtTDAtz0rjvzVRop/G9mZKOCKSc5JJtWRfWEdgS5/5JuQLefRQC6TXteJaV4yCNUREVlCIiIiIiIiIiIiIUQoiIiIi6DYrAPbqkMN923vSH838m/Inh8Vbu0WKtpYmhoGZxbHEwdToNOgUP2aYYIKMSH35zn/y8Gj7/Vc3WYt7Xi8bb/g4nlrByLgDc+d/sXz1Z3vWKdP7KYP1H5NvkF16TRQoj+pxHfkLrq6YnMSTd3DXrzUpDKT5KDgeQbHqVMxOBFr/APOZXmrN4r1zdV52rUz9/HLlAYWBgI4lwLic3odPALhVeWLxRyxuilF2vFj1HQjoVTVZhkkcxgsXvBsMoJzA6ggdCCuz7OrB1IM3b0XLxtEtfnGjuvD8LSRdPh+x8jiN+7dfmts9/wAtG+p9F1mG7IQD+pB8ZDnPw935LarjaTOffekrOng6j76fPuVxeyOzE9dKBFdrGm7pbGzbdOrvBXths0VHGyMyCSUCxJIzuPO4GjVwm0eOx4fGImEPkPCJpytYPynNboB4c1W7cbm3zZnPLnNNxyFuYAGgC8T6VTHDMTDdufnr0HCVr+nhzlJk7ru+1/DXSOZWgkiwjkbxDNTkI8Dcg+NuqrJXpC6Ospsp1jmjsfC4uD5g2PoqQqYDG9zHaOY4tPm0kH7Ft7Mql1Pw3att5dys8ZSDHyNCvJERdJeREREREREREREREKIURF9wxl7g0cXENHqbfevhbmDD+cQ3/tY/3goccoJUgSYV5YpKKamcRoIodP8AK2wVDQTuY4PaSHAhwPO/FXZt6f5nU/ofeFRy43sQfpOdxI6T910faR+No5d9FaOzmNsrONmz277OT/zm+K6KndxI0t/y3kqUoQ/eM3Vw/MMtuN+SumOiltmNhcC978bC+gVcdQbSIg2O3D+OC3wtY1WnNqPXvdas15HNaDx4k8ABqSfmfRaRqhI8iFgY21i+w3kgH5T+IHgvvFIzDG4uIzy9xo1uGcXOI6GwA9VjCmBZgAMnvvv5egKSoaQBY2ixplFCXk98giNvNzv4DiUq8RZAx0khsxo6a9AAOZKqfaLGn1kpkfoBcMb+S29x5nqUw+FdiHy/9o158vyvPiK4ptgalR00rnuLnEuc43JPEk8SvNEa0nQC58F9BquMrQ7Nawvpyw/UcQPI2K5LtBp8ldLb6wa/9pov8wuk7OaR8W+Egyk5DlPEXBtccvI6qJ7Uh/PG/qWfvSLk0jlx7gNCD0B6rpVRmwjSdRH4XHIiLrLmoiIiIiIiIiIiIhRCiIvalmyPY/8AJc13wIP3LxREV97SQb6lla3XPEbfs3CoNXjsHiQqaGM3u6Mbt3m0C3xFlVO1WFeyVT47dy+dniw6gemo9FxPZB8N76DtQelukeq6OP8Aja2oNIVmbJbMxRw0tTIzvtYA4jkHEkEjhpe111eIY5G05Bl8/sWNi6qOohAFix7Bb4fcVWHahDLTzMyuc0d4aEjXl8l5KdJ2JqxUN/i6zC9L3NptNtI853XTYthDZCZGSZnHx1+KgmF8TrZgBzNrrjGbR1AFt568/kvWgxiSSRrZXXDiG+RJsCuk3B1GNgkELMYym4gXUxtiZnRDKRJEDd7mcjyzN4tHHXguMVjSYK+I5mkm+luR8COYUDVYJFC8SzOIiuM0bQXOv+Tpo1vmb8lvhqzA3KPTdYYrDvzZ+x/HRczFEXGzQXE8ABc/AKzNi6Wlpo2vmlp2Saukc97bt10aGXzOI6N4m+q5PaTHIpCGUkZgiAsfdaX9dGi4GvAk34qAghL3BrRdziAB4nQLZ9M1mw6w4fYrzsqCk6W3Pdwri2fMEhmmgdLIJZSS+UNbm/RY0d1vS+q4DtGqc9c+31GsZ8Bc/arJwymbRUzQ46RMu4+Nrn5ql66qMsj5HcXuLj6ngudgYq4h9UaCw7+QXsxnwUW099T9/UrXREXYXMRERERERERERERCiFEREREXX9m2PilqN3IbRTWaSeDXfVd5cj5hWDt1st7bD3B+GjuY/wA4c2E+PLxVHK2uzzbQStbS1LrSDSN7vrjk0n8rp181yMfQfTeMVS1Gv5/K9uGqtLfBfoe+q4rZnaifD5LalocQ6M6Fp4OtfgfAqwcYMWN0bnQPBmaA7IdHXGtiPiL+K2tstho668kZEVTb3j7knQPtwP5w9VW1Lh1Xh0+eT+bFhtmedHjiQwC+8FunxCgeDi4rUjleO4I3njqrBz6P6b7tPdj+VzThbQ6EcQeRUlBhxZlkmduW6EAi73cxlj428TYLoNoKxkg9tpWNa55tNdoL2u077W3LWB3O2oPOxXJMJfILkuc5wuSbkkkcSeK6dN5eJiOPEHh/O+q8rmZTGqvr2UPY3xA+Y59VzOOYGLOa4d1wsfuPmDZeO2m2JprU1PbeBrc7zY5OdgPyrW4rm8B2zqd6GzZqpjr3YGgv15tsPlw1K4eFw2JyeKNNQN/nwHKYXWqYqk1+Q/I8Fy1bSuie6N/Fpsf4qwezPZYkirlbp/VA87/X/gp9+x8E9THNK11sosx2lyDdofbmNdOakdstqIsPiyts6YizGDl+cRyCtivaDqzW0KA+J2vLvc6AcVhTwzaTjUebDT7fx9VynaljQY0UjD3nWdJbkOTfWyrJe1XUOle6R5LnOJLieZK8V18LhxQpBg8+Z3Xhr1jVfmKIiL0LFEREREREREREREKIURERERAL6DVTuJ7LVNLuzO0RNkAcHOIAHgeecdAvXZ/GIKI70Rb+f6pfYMj/AEW2OZ3ifRfO0u1MtcAJWtFnZgbuJ4EWu48NeXgsS6oXgNFtz+AtQ1gbJN+Hdl0+z3aLuAyGcvnjGhl0Dx07vFzR1JzfYrGoa+krosrHRVEZ4scA63mx2rSvzkvSGVzDma4tI5tJB+IXir+y6bznpktdy/FvQhasxTgIcJCvKs7OqJ4duxLT5uIjfdv7Mgdb4qIh7KYWSNe2qkOVzXWMTdbEG1w7w6LhMO25r4RYVDngcpLP+btfmpEdqFf/AOz/AKf/AOl5/d/aLLCoD9PuFfxMOb5Su2d2a0z5HSzyTTOcS51y1gJPg0X+anKbDqSgYSxkVO0cXOIB9XuNz8VUdX2iYhILb4M/QY0H4m9lztXXSzG8sj5D1e5zvtKf6fiqoitUgcB02Ct7zSZdjbq0Noe0qFhDKZm+sRd5OUW6N0uT48FXeOtL5DOHulZIbh7tXA82P6OHzFrKKX2yQgEA2B0I6ro4fCU6H+358++ULz1K7qgh3+O+a+ERF6lgiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIsXRFlFi6XRFlFi6XRFlERERERERERERERERERERERERERERERERERERWN2S7Q00D/Zp6VtQ+omjaxzmsIZfu/WBPO+nRVypfZKoZFW00kjg1jJo3OceAaHAkqrhIWtJ0O+dvUcFcHanjNHTyfR7KNjJX7hzZWMjAAMgJFgL8Gkeqn8W2Jz4vS1EdPCKVkbmygBgBcQ+34P63FvJVX2o43BVYrHPTyiSINiBeLgAtcS7iAdF3OL9oFOcYpXxVp9jEbt9ZzxHmtJbMzmdW8unRUgd+a9fx5QB99SG89ZmOilNmaCBr8Wd7HHUGKqcI4xGwkgMZZjbiwVe9qO1FNNH7IzD/Y52SNc+7YgbWPdOTzBXY7P7V4dmxRk1WImVFS5zHNL2uLCxozNc0XbwXE9o1LhAhElDUvnqC9odnkkecljc3eBfgEA0SoHfEYPrERfePRVuiItVz0RERERERERERERERERERF9RxlxAaCSdAALknoAOK2fo2bPu9zJntfJkdmt1y2vbxW7sd+P0f8AiIf32r9K/wDlg/TPt++ZbcbrdfX4e9e/3KpJmFsxrCCXc/TbTnqvy59GzZXO3UmVt8xyOs23G5tpbxWfo2azTuZLP905HWdfUZTbveivOH+iMb/xFX+8FtUf4js/+vg/+KRVzmJW3gMmL6xryngqBZh8rnmMRSF44sDHFw822uF9xYTUOF2wSuFyNGPOo4jQcQv1WNno/pH26OwdunQygczdrmnzAFj4ELjsJxySgwesqYg1z2VlRYPuRrMGm9iDzUlxCoykxwtO28a7aKg5sOmYQHxSMLjZocxwLj0AI1OvJev0HVf3af8A0n/wVubYwYhUOoKqqNJumVMTWmnc59zI9l7300ydV2HaLtfVYdmkhFK+NrWXY+Qia7ja4jHFvDXzUZ++yrOoNHHffhzi/wBB5r83x4VO6+WGV2U2NmPNj0NhofBfNTh0sYBkiewHQF7HNBPS5HFXv2VYxPLRYjVQxB876l8jY76F7msOW5PBR/bnNK/DaF87BHK6S8jBwa7dm4VgT3/lVNKneOHHlOkaeapWlo5JCRGx8hGpDGl1vQBe0uEzsBc6CVrRxJY8AeZI0Vlf+HY/z2f9T/8AZq6GoxbE8XoqljfY2w/hGOGaQShsbr3y68cvrqoLoUUqLXC/UDcjSOXFUbTUz5DljY55tezWlxt1sOSNpnl+QMcX3tkynNfpl43Vw9gVAIYqqve0kACJlhqdQ59vXIF9Y9g+42opZAO7USMlHnlLX/MX9VJKhtKQPL5bctbj6qnn0UgeIzG8PPBha4OP+W116NwqoLiwQylwAJbkfcA8CRa4C/VlbsrFJiMNebZoo3st1cdGH0Dnj1Ch8KP/AKgrf8JB9oQkhS1lMgm9hOvpprz9F+bJsIqGAudBK1o4l0bwB5kjRYgwud4zMhle08C1jyD6gK1e0jb6rbE+jnbSPbNHq+nkc+wv14ZtOCsrDsVzUtMMNfSPbuwMskpaRZrbNDWAnN71wVGe099VY0Wzv9RbeZj7ea/LE8DmEte1zHDiHAgj0K811HaU+d2I1BqY2xSktzNaS5vugAtceIIF1y6sNFg8AOICIiKVRERERSGz9Y2CqgmffLHKx7rcbNcCbeOiso9pFL9NfSGWXc7jd5coz5uHC9vmqlRQQtWVS0QOfrE9FcOzPaVh8MdXFUxSSsqKiWXLkaQWPNwHAu4r2xrtOw+T2JsEUscdNOyTLkaBka14s0B3HvBUwijKFY1zMwPX8q5qHteiixGeXLK6kma05bDO2RrQ3MG3trax16dF57P9ouGx0s1NVwyyskqJpS3KC0te/O0G7hqLBVJRUj5pGRRjM97g1o4XcTYC5XWfyV4v/dD+3H/uUQOKsHvIsOxpuur2k7RcPlp6aCliliZDURS5coDQ1ry5wFnHXUqVxXtKwKqfvKiifK+wGZ8TCbDgLl3DVVtS9nmJSukbHTFxifu5AHs7r7B1tXa6OHBedfsFiFO6JstOWOmfu4wXMOZ1r20OnqotxUk1eHXfzXZbL9pNLQRVrYY3gy1DpYGhoDWs7uVjtdNBbS6jO1XbWDExEYHTNyXzRyCzb20c2xNjqQeF1ARbBYg+eSmbTkzRta97MzO613A3vYqAgpnPkbE0Xe5wY0dXE5QL+ZUgDij3POrdbb72jXlZdh2U7WwYZUSyzte5r48gDACb5geZGmi7mn7TMGgZOKallhdM1zXFrGjMSHWJ73VxXBfyV4v/AHQ/tx/7lqYd2f4hUbzc0xfu5HRPs5gyyMtmbqdbXCGDuoaKgFh1+Y0MLqcO7SWUOFxUtDnbUtdme97GlveJc+173+qNRwC3MT7SqSokw6okZJv6V4dMQ0WcC2z8uuveAI4cSuExbYiupTE2eDdGZ+SO7md53S4OnEcVip2Kro6iOlfTuE8gJY27TmAvc5gbaWPNRA4qQ6oDOUfTu197C2isqp7Y4t+crZNw6aGQ3AzhrG99oF7auYzn1XhQ9qNGzE6mscyYxTQRxtblGa7TrcZrW9VVGL4VLSSuhnbkkbbM24Nr62JaSLrSUhoVXVnftLRw34AceQVqbT7W4JNSzR01Dup3Nsx+6YLOvxuHXHNTGB9o2C0zIT7ERNGxgMjYIgS8NAc4OvfU318VSaymRVNdxEHqfyp/bjaL6RrZajLka6wa06kNaLC5681z6IrALImTKIiKVCIiIiIiIiIiIi96KrfDIyWM5XscHNPGzgbg2KvfDNq6x2zstY6cmoa9wD7NuAHtAFrW4HoqBXYUe3TosKfhu5Ba4uO8zG4u4O921uXVVcFtRcAYcbfyFaHZVU1dZhtbIyUNqpZ3FsrgAA/JGMxABHLopDbGOVhwZlQ8STNqWCVzeDn5O8RoNCfAKpNku0KXDqOSmiiBL37wSFxBa4Zbd22o7g5rc2g7SPa6qlqzSNZJTuB0kJEgGoB7uljex8SqmeC1a8WJcPWZygaxp+OatrA/6fxH/DQ/cqAwOB4r4CWuA9pi1INv+o3muuou1h8VdPWilaXTRsjLN4bNyc75dbr12g7X31cbYzRsjyyxS3Dyf+m8Pt7vO1kg38/VWFRkiT/SfpPLmrSqsaqRj8dKHn2Z1OXlthbPZ+ua1+Q0uoOKulp8OxmaBxZIyuqS1wsSDmiHA+a57+XmS9/YY79d4f8AaonAe1x9KJwKRkgnqJKg5nnQyZe77uoGXihBVA9ttLR5wZ4dVvbeYfLPhUde/EJKprXtyNdG1mV7jlfYgA6EEei7nZraqKXCm4nMzNNTRSxk21LhlGn6WVh8LlVhtp2pvxGkNKaVkLS5rszXk2ym/DKFE4Vt06DDJcOEIc2UuJkzEEZiD7ttfd6pBhSajS6CbfadNP6SZEXXL4jWvnlkmkN3yPc9x8XEk/atdEWi8pM3KIiIoREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//2Q==",
        description:"Dystopia set in the small nation.",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "1984 Hardcover",
        author: "George Orwell",
        img: 'https://images-na.ssl-images-amazon.com/images/I/31eAjJhD+zL._SX328_BO1,204,203,200_.jpg',
       
        description:"The entire story, there is no room for hope",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "This Is How You Lose Her Paperback",
        author: "Junot Díaz ",
        img: "https://m.media-amazon.com/images/P/1594631778.01._SCLZZZZZZZ_SX500_.jpg",
        description:"This Is How You Lose Her",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "Florida Paperback",
        author: "Lauren Groff",
        img: "data:image/jpeg;base64,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",
        description:"In her vigorous and moving new book",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "Punk and hardcore",
        author: "DK",
        img: "https://images-na.ssl-images-amazon.com/images/I/61u5IUuPCUL._SX403_BO1,204,203,200_.jpg",
        description:"Big Ideas Simply Explained by Will Buckingham",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "Big Ideas Simply Explained",
        author: "DK",
        img: "https://images-na.ssl-images-amazon.com/images/I/519U4ew0EXL._SX418_BO1,204,203,200_.jpg",
        description:"Big Ideas Simply Explained series",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "Tipitaka",
        author: " Harivarman",
        img: "https://www.worldatlas.com/r/w960-q80/upload/67/3a/b5/shutterstock-413882605.jpg",
        description:"Certain dietary rules,dress code",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "Don Quixote",
        author: "Miguel de Cervantes ",
        img: "https://m.media-amazon.com/images/I/51iQq6ZYedL.jpg",
        description:" Immortal comedy of Don Quixote",
        press: () => this.props.navigation.navigate(""),
      },
      {
        name: "Harry Potter and the Sorcerers Stone",
        author: "J.K. Rowling",
        img: "https://orion-uploads.openroadmedia.com/sm_9333ba5b72d2-hp.jpg",
        description:"The characters are truly",
        press: () => this.props.navigation.navigate(""),
      },
     
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == "") {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter((l) => l.name.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{ height: 10, width: "100%", backgroundColor: "#e5e5e5" }} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableHighlight style={styles.backBtn}>
          <Text
            onPress={() => this.props.navigation.navigate("dashboard")}
            style={styles.backBtnTxt}
          >
            &#x276E; 
          </Text>
        </TouchableHighlight>
        <View style={styles.header}>
          <TextInput
            placeholder="Enter Book Name"
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>

        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={item.press}>
                <View style={styles.bookContainer}>
                  <Image style={styles.image} source={{ uri: item.img }} />
                  <View style={styles.dataContainer}>
                    <Text numberOfLines={2} style={styles.title}>
                      {item.name}
                    </Text>
                    <Text style={styles.author}>{item.author}</Text>
                    <Text numberOfLines={4} style={styles.description}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    width: "100%",
    backgroundColor: "#7d5fff",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    paddingLeft: 20,
    marginBottom:15
  },
  bookContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#d1d8e0",
  },
  image: {
    height: 150,
    width: 100,
    marginLeft: 5,
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
  },
  author: {
    fontSize: 16,
  },
  backBtn: {
    backgroundColor: "#7d5fff",
  },
  backBtnTxt: {
    marginTop: 25,
    marginLeft: 13,
    fontSize: 30,
    fontWeight: "500",
    color: "#ffb142",
  },
});