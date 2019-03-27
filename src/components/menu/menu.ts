import Vue from 'vue'
import Component from 'vue-class-component'
// The @Component decorator indicates the class is a Vue component
@Component
export default class Menu extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'Hello!'
  drawer: boolean = false;
  items: Array<any> = [
    { icon: 'supervised_user_circle', text: 'Users', link: '/users' },
  ]

  // Component methods can be declared as instance methods
  onClick (): void {
    window.alert(this.message)
  }
}