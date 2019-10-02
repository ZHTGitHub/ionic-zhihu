import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { WeirdTabPage } from '../weird-tab/weird-tab.page'

@Component({
	selector: 'app-tabs',
	templateUrl: 'tabs.page.html',
	styleUrls: ['tabs.page.scss']
})
export class TabsPage {

	public tabs: Array<Object> = [
		{
			tab: 'tab1',
			icon: '',
			selectedIcon: '',
			key: 'home',
			text: '首页',
			index: 0
		},
		{
			tab: 'tab2',
			icon: '',
			selectedIcon: '',
			key: 'vip',
			text: '会员',
			index: 1
		},
		{
			tab: undefined,
			icon: '',
			selectedIcon: '',
			key: null,
			text: null,
			index: null
		},
		{
			tab: 'tab3',
			icon: '',
			selectedIcon: '',
			key: 'message',
			text: '消息',
			index: 2
		},
		{
			tab: 'tab4',
			icon: '',
			selectedIcon: '',
			key: 'my',
			text: '我的',
			index: 3
		}
	]

  	constructor(
	  	private modalCtrl: ModalController
	) {}

	_tabsDidChange(tab) {

		console.log(tab)

	}

	async _selected(item) {

		if(item.tab) {

			console.log(item)

		}else {

			await this.modalCtrl.create({
				
				component: WeirdTabPage

			}).then((modal) => {

				return modal.present()
				
			})
			
		}

	}

}
