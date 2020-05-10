import Vue from 'vue'

import {
  Button,
  Message,
  Input,
  Form,
  Upload,
  FormItem,
  Col,
  Row,
  Card,
  Image,
  Container,
  Aside,
  Main,
  Footer,
  Header,
  Popover,
  Avatar,
  Menu,
  Submenu,
  MenuItem,
  Drawer,
  Tag,
  MessageBox,
  Notification,
  Badge,
  Loading,
  TabPane,
  TableColumn,
  Table,
  Progress,
  Carousel,
  CarouselItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(Upload)
Vue.use(FormItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(Image)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Header)
Vue.use(Popover)
Vue.use(Avatar)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Drawer)
Vue.use(Tag)
Vue.use(Badge)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Progress)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$loading = Loading.service
