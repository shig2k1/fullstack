import { storiesOf } from '@storybook/vue'

import Card from './card.vue'

storiesOf('card', module)
.add('Standard', ()=>({
	components: {Card},
	template: `
		<card></card>
	`,
	data(){
		return {}
	}
}))