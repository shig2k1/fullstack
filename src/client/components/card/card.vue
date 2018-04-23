<template lang="pug">
	div.card
	
		svg(xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 180 252",
		:width="width",
		:height="height")
			
			defs(v-html="injectedDefs")

			defs
				//clipPath#fried-egg-clip-path(transform='translate(-8.94 9.55)')
				//	rect(width='89.36', height='8.69')
				clipPath#gerkin-clip-path
					rect(y='5.32', width='32.38', height='7.34')
				
				symbol#Sesami-seed(data-name='sesami-seed', viewbox='0 0 3.98 2.88')
					ellipse.seed-bg(cx='2.13', cy='1.33', rx='0.78', ry='2.14', transform='translate(-0.14 2.4) rotate(-57.27)')
					ellipse.seed-fg(cx='1.85', cy='1.55', rx='0.78', ry='2.14', transform='translate(-0.45 2.27) rotate(-57.27)')
			
				symbol#Burger_Bun_Top(data-name='Burger Bun Top', viewbox='0 0 83.88 30')
					g#bun
						path.bun-mid(d='M80.58,0a3.2,3.2,0,0,1,3.3,3.1,3.25,3.25,0,0,1-.14,1C78.69,19,61.89,30,42,30S5.19,19,.14,4.13a3.19,3.19,0,0,1,2.13-4A3.25,3.25,0,0,1,3.3,0Z')
						path.bun-shadow(d='M83.6,4.13a34.41,34.41,0,0,1-11,15.41A33.68,33.68,0,0,0,81.33,6.13a3.2,3.2,0,0,0-2.16-4,2.94,2.94,0,0,0-1-.14H.11A3.29,3.29,0,0,1,3.16,0H80.44a3.2,3.2,0,0,1,3.3,3.1A3.25,3.25,0,0,1,83.6,4.13Z')
						use(width='3.97', height='2.88', transform='translate(8.12 10.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(20.12 10.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(15.12 16.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(27.12 16.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(39.12 16.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(25.12 22.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(35.12 22.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(45.12 22.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(50.12 16.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(32.12 10.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(43.12 10.55)', xlink:href='#Sesami-seed')
						use(width='3.97', height='2.88', transform='translate(54.12 10.55)', xlink:href='#Sesami-seed')
			
				symbol#Burger_Bun_Middle(data-name='Burger Bun Middle', viewbox='0 0 84.46 8.15')
					rect.bun-mid(width='84.46', height='8.15', rx='3.78', ry='3.78')
					path.bun-shadow(d='M84.38,5.07A3.78,3.78,0,0,0,80.68,2H.47A3.74,3.74,0,0,1,3.78,0h76.9a3.79,3.79,0,0,1,3.78,3.77v.6A3.27,3.27,0,0,1,84.38,5.07Z')
		
				symbol#Burger_Bun_Bottom(data-name='Burger Bun Bottom', viewbox='0 0 84.45 9')
					path.bun-mid(d='M0,1.91V3.34C0,6.45,3.4,9,7.54,9H76.91c4.15,0,7.55-2.55,7.55-5.66V1.91C84.46.85,83.32,0,81.91,0H2.54C1.14,0,0,.85,0,1.91Z')
					path.bun-shadow(d='M84.43,1.72C84.17,4.66,80.89,7,76.91,7H1.81A8.7,8.7,0,0,0,7.54,9H76.91c4.15,0,7.55-2.55,7.55-5.66V1.91A1.08,1.08,0,0,0,84.43,1.72Z')
				

				symbol#Burger_Bun_Middle(data-name='Burger Bun Middle', viewbox='0 0 84.46 8.15')
					rect.cls-6(width='84.46', height='8.15', rx='3.78', ry='3.78')
					path.cls-7(d='M84.38,5.07A3.78,3.78,0,0,0,80.68,2H.47A3.74,3.74,0,0,1,3.78,0h76.9a3.79,3.79,0,0,1,3.78,3.77v.6A3.27,3.27,0,0,1,84.38,5.07Z')
				
				symbol#Burger_Bun_Bottom(data-name='Burger Bun Bottom', viewbox='0 0 84.45 9')
					path.cls-4(d='M0,1.91V3.34C0,6.45,3.4,9,7.54,9H76.91c4.15,0,7.55-2.55,7.55-5.66V1.91C84.46.85,83.32,0,81.91,0H2.54C1.14,0,0,.85,0,1.91Z')
					path.cls-5(d='M84.43,1.72C84.17,4.66,80.89,7,76.91,7H1.81A8.7,8.7,0,0,0,7.54,9H76.91c4.15,0,7.55-2.55,7.55-5.66V1.91A1.08,1.08,0,0,0,84.43,1.72Z')
				
				symbol#Burger_Patty(data-name='Burger Patty', viewbox='0 0 88 9.78')
					rect.patty-mid(width='88', height='9.78', rx='4.71', ry='4.71')
					path.patty-shadow(d='M88,4a4.82,4.82,0,0,1-5,4H1A5.23,5.23,0,0,0,5,9.78H83a4.76,4.76,0,0,0,5-4.45V4.44A3.29,3.29,0,0,0,88,4Z')
				
				symbol#Fried_Egg(data-name='Fried Egg', viewbox='0 0 89.36 18.27')
					path.fried-egg-white(d='M53.91,121.52c.46,1.4,3.23,2.2,6.28,3.4,1.93.76,3.86,2.94,6.62,3.51,2.2.46,4.89-.7,7.5-.4,2.31.28,4.63,2.06,7.19,2.2,2.37.12,4.87-1.38,7.39-1.38s5,1.5,7.39,1.38c2.56-.14,4.88-1.92,7.19-2.2,2.62-.3,5.3.86,7.51.4,2.75-.57,4.69-2.75,6.61-3.5,3-1.21,5.82-2,6.29-3.41Z', transform='translate(-53.91 -121.52)')
					path.fried-egg-yolk-mid(d='M75.77,121.52a2.52,2.52,0,0,0-.11.61c0,2.92,6.32,4,14.19,4s14.26-.89,14.3-3.82a2,2,0,0,0-.16-.78Z', transform='translate(-53.91 -121.52)')
					path.fried-egg-yolk-shadow(d='M102.16,121.52c-.1,2.9-6.46,3.84-14.3,3.79a45.06,45.06,0,0,1-10.32-1c2.44,1.19,7,1.66,12.31,1.7,7.87,0,14.26-.9,14.3-3.83a1.75,1.75,0,0,0-.11-.67Z', transform='translate(-53.91 -121.52)')


				symbol#Cheese(data-name='Cheese', viewbox='0 0 59.4 7.7')
					polygon.cheese-mid(points='29.7 7.7 59.4 0 0 0 29.7 7.7')
					polygon.cheese-shadow(points='59.4 0 29.7 7.7 28.18 7.34 58.1 0 59.4 0')
				
				symbol#Salad(data-name='Salad', viewbox='0 0 93 21.69')
					path.salad-green(d='M49,122.28c.69.43,1.45.86,2.17,1.34,1.51,1,2.71,3.19,5,4,1.89.62,4.46-.28,6.76.14,2,.37,4,2.12,6.24,2.31,2.1.18,4.37-1.21,6.62-1.21.85,0,1.71,1.47,2.54,1.45s1.6-1.55,2.42-1.6,1.83,1.35,2.65,1.27,1.47-1.65,2.28-1.75,1.79,1.23,2.6,1.09c.8.14,1.75-1.21,2.59-1.09s1.43,1.67,2.28,1.75,1.8-1.33,2.65-1.27,1.57,1.57,2.42,1.6,1.7-1.45,2.54-1.45c2.26,0,4.52,1.39,6.62,1.21,2.28-.19,4.21-1.94,6.25-2.31,2.3-.42,4.87.48,6.75-.14,2.33-.77,3.53-3,5.05-4,.71-.47,1.47-.9,2.17-1.33Z', transform='translate(-49.04 -122.28)')
					path.tomato-shadow(d='M58.36,122.28a1.23,1.23,0,0,0,0,.19c0,4.27,13.78,7.73,30.78,7.73s30.78-3.46,30.78-7.73a1.23,1.23,0,0,0,0-.19Z', transform='translate(-49.04 -122.28)')
					path.tomato-mid(d='M61.48,122.28c5,2.22,15.5,3.75,27.64,3.75s22.63-1.53,27.64-3.75Z', transform='translate(-49.04 -122.28)')
					path.tomato-shadow(d='M64.81,122.28c.11.36.65.92,2.74,1.34a30.29,30.29,0,0,0,6.31.47,3.41,3.41,0,0,0,.87-.12l5-1.69Z', transform='translate(-49.04 -122.28)')
					path.tomato-shadow(d='M97.35,122.28l4.22,1.68a3.39,3.39,0,0,0,1.06.13,44.59,44.59,0,0,0,7.65-.58c2.3-.48,2.38-1,2.23-1.23Z', transform='translate(-49.04 -122.28)')
					path.tomato-shadow(d='M95.32,124.56c.05,0,0,0,0,0Z', transform='translate(-49.04 -122.28)')
					path.tomato-shadow(d='M85,122.28l-3.69,2.11c-.15.08,0,.17.26.24a38.51,38.51,0,0,0,7.41.69,21.24,21.24,0,0,0,6.1-.77.24.24,0,0,1,.19,0l-3-2.27Z', transform='translate(-49.04 -122.28)')

				symbol#Gerkin(data-name='Gerkin', viewbox='0 0 32.38 12.66')
					g.gerkin-clip-path
						path.gerkin-back(d='M31.77,5.32c0,.83-1.24,1.27-2.47,1.93-.77.42-1.48,1.47-2.62,1.78-.92.25-2.09-.24-3.2-.07s-1.92,1-3,1.07-2.06-.62-3.13-.62-2.13.69-3.13.62-2-.92-3-1.07S8.94,9.28,8,9C6.88,8.72,6.16,7.67,5.39,7.25c-1.22-.66-2.46-1.1-2.46-1.93S4.17,4.05,5.39,3.39C6.17,3,6.88,1.93,8,1.62c.92-.26,2.09.24,3.19.07s1.92-1,3-1.07,2.06.62,3.13.62S19.48.55,20.48.62s2,.92,3,1.07,2.27-.33,3.19-.07c1.14.31,1.85,1.36,2.62,1.77C30.53,4.05,31.77,4.5,31.77,5.32Z')
						path.gerkin-mid(d='M23.89,5.38c0,.28-.56.42-1.11.64a6.1,6.1,0,0,1-1.2.59c-.41.08-.95-.08-1.45,0s-.87.33-1.36.36-.94-.21-1.42-.21-1,.23-1.42.21-.93-.31-1.37-.36-1,.11-1.45,0A5.73,5.73,0,0,1,11.92,6c-.56-.22-1.12-.36-1.12-.64s.56-.41,1.12-.63a5.73,5.73,0,0,1,1.19-.59c.42-.08,1,.08,1.45,0s.88-.33,1.37-.36.93.21,1.42.21,1-.23,1.42-.21.92.31,1.36.36,1-.11,1.45,0a6.1,6.1,0,0,1,1.2.59C23.33,5,23.89,5.11,23.89,5.38Z')
		
				symbol#Bacon(data-name='Bacon', viewbox='0 0 91 11.51')
					path.bacon-shadow(d='M78.49,5.8a12,12,0,0,1-6.18-1.56A9,9,0,0,0,68.39,3l-.56,0h-.66a8.91,8.91,0,0,0-4.5,1.23A12,12,0,0,1,56.49,5.8a12,12,0,0,1-6.18-1.56A8.93,8.93,0,0,0,45.82,3h-.66a8.9,8.9,0,0,0-4.49,1.23A12,12,0,0,1,34.49,5.8a12,12,0,0,1-6.18-1.56A8.89,8.89,0,0,0,23.83,3h-.66L22.6,3a9,9,0,0,0-3.92,1.21A12,12,0,0,1,12.5,5.8,12,12,0,0,1,6.32,4.24,8.93,8.93,0,0,0,1.83,3H1.5a1.5,1.5,0,0,1,0-3h.42A12,12,0,0,1,7.68,1.56,9,9,0,0,0,12.5,2.8a9,9,0,0,0,4.82-1.24A12,12,0,0,1,22.4,0q.33,0,.69,0h.82a12,12,0,0,1,5.76,1.55A9,9,0,0,0,34.49,2.8a9,9,0,0,0,4.82-1.24A12,12,0,0,1,45.08,0h.83a12,12,0,0,1,5.76,1.55A9,9,0,0,0,56.49,2.8a9,9,0,0,0,4.82-1.24A12,12,0,0,1,67.08,0h.83c.23,0,.47,0,.7,0a12,12,0,0,1,5.06,1.52A9,9,0,0,0,78.49,2.8a9,9,0,0,0,4.83-1.24A12,12,0,0,1,89.09,0h.41a1.5,1.5,0,0,1,0,3h-.32a9,9,0,0,0-4.5,1.23A12,12,0,0,1,78.49,5.8Z')
					path.bacon-shadow(d='M78.49,11.8a12,12,0,0,1-6.18-1.56A9,9,0,0,0,68.39,9l-.56,0h-.66a8.91,8.91,0,0,0-4.5,1.23,12,12,0,0,1-6.18,1.56,12,12,0,0,1-6.18-1.56A8.93,8.93,0,0,0,45.82,9h-.66a8.9,8.9,0,0,0-4.49,1.23,12,12,0,0,1-6.18,1.56,12,12,0,0,1-6.18-1.56A8.89,8.89,0,0,0,23.83,9h-.66L22.6,9a9,9,0,0,0-3.92,1.21A12,12,0,0,1,12.5,11.8a12,12,0,0,1-6.18-1.56A8.93,8.93,0,0,0,1.83,9H1.5a1.5,1.5,0,0,1,0-3h.42A12,12,0,0,1,7.68,7.56,9,9,0,0,0,12.5,8.8a9,9,0,0,0,4.82-1.24A12,12,0,0,1,22.4,6q.33,0,.69,0h.82a12,12,0,0,1,5.76,1.55A9,9,0,0,0,34.49,8.8a9,9,0,0,0,4.82-1.24A12,12,0,0,1,45.08,6h.83a12,12,0,0,1,5.76,1.55A9,9,0,0,0,56.49,8.8a9,9,0,0,0,4.82-1.24A12,12,0,0,1,67.08,6h.83c.23,0,.47,0,.7,0a12,12,0,0,1,5.06,1.52A9,9,0,0,0,78.49,8.8a9,9,0,0,0,4.83-1.24A12,12,0,0,1,89.09,6h.41a1.5,1.5,0,0,1,0,3h-.32a9,9,0,0,0-4.5,1.23A12,12,0,0,1,78.49,11.8Z')
					path.bacon-shadow(d='M78.49,8.58A12,12,0,0,1,72.31,7a9,9,0,0,0-3.92-1.21q-.42,0-.9,0A9,9,0,0,0,62.67,7a12,12,0,0,1-6.18,1.56A12,12,0,0,1,50.31,7a9,9,0,0,0-4.82-1.24A9,9,0,0,0,40.67,7a12,12,0,0,1-6.18,1.56A12,12,0,0,1,28.31,7a9,9,0,0,0-4.82-1.24c-.31,0-.61,0-.89,0A9,9,0,0,0,18.68,7,12,12,0,0,1,12.5,8.58,12,12,0,0,1,6.32,7,9,9,0,0,0,1.5,5.78a1.5,1.5,0,0,1,0-3A12,12,0,0,1,7.68,4.34,9,9,0,0,0,12.5,5.58a9,9,0,0,0,4.82-1.24A12,12,0,0,1,22.4,2.82c.34,0,.7,0,1.09,0a12,12,0,0,1,6.18,1.56,9,9,0,0,0,4.82,1.24,9,9,0,0,0,4.82-1.24,12,12,0,0,1,6.18-1.56,12,12,0,0,1,6.18,1.56,9,9,0,0,0,4.82,1.24,9,9,0,0,0,4.82-1.24,12,12,0,0,1,6.18-1.56c.4,0,.77,0,1.12,0a12,12,0,0,1,5.06,1.52,9,9,0,0,0,4.82,1.24,9,9,0,0,0,4.83-1.24A12,12,0,0,1,89.5,2.78a1.5,1.5,0,0,1,0,3A9,9,0,0,0,84.68,7,12,12,0,0,1,78.49,8.58Z')
					path.bacon-mid(d='M78.49,6.19a11.06,11.06,0,0,1-5.73-1.45,9.93,9.93,0,0,0-4.3-1.32c-.3,0-.63,0-1,0a9.89,9.89,0,0,0-5.27,1.35,11.06,11.06,0,0,1-5.73,1.45,11.06,11.06,0,0,1-5.73-1.45,9.92,9.92,0,0,0-5.27-1.35,10,10,0,0,0-5.28,1.35,11,11,0,0,1-5.72,1.45,11.06,11.06,0,0,1-5.73-1.45,9.89,9.89,0,0,0-5.27-1.35q-.51,0-1,0a9.89,9.89,0,0,0-4.31,1.32A11,11,0,0,1,12.5,6.19,11.06,11.06,0,0,1,6.77,4.74,9.92,9.92,0,0,0,1.5,3.39a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5A11.06,11.06,0,0,1,7.23,3.84,9.89,9.89,0,0,0,12.5,5.19a9.92,9.92,0,0,0,5.27-1.35,10.9,10.9,0,0,1,4.7-1.41c.32,0,.66,0,1,0a11.06,11.06,0,0,1,5.73,1.45,9.92,9.92,0,0,0,5.27,1.35,9.92,9.92,0,0,0,5.27-1.35,11.06,11.06,0,0,1,5.73-1.45,11,11,0,0,1,5.72,1.45,10,10,0,0,0,5.28,1.35,9.92,9.92,0,0,0,5.27-1.35,11.06,11.06,0,0,1,5.73-1.45c.37,0,.72,0,1.05,0a10.85,10.85,0,0,1,4.68,1.41,9.92,9.92,0,0,0,5.27,1.35,9.93,9.93,0,0,0,5.28-1.35A11.06,11.06,0,0,1,89.5,2.39a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5,10,10,0,0,0-5.28,1.35A11,11,0,0,1,78.49,6.19Z')
					path.bacon-mid(d='M78.49,9a11,11,0,0,1-5.73-1.46,9.93,9.93,0,0,0-4.3-1.31c-.3,0-.63,0-1,0a10,10,0,0,0-5.27,1.34A11,11,0,0,1,56.49,9a11,11,0,0,1-5.73-1.46,10,10,0,0,0-5.27-1.34,10.06,10.06,0,0,0-5.28,1.34A10.88,10.88,0,0,1,34.49,9a11,11,0,0,1-5.73-1.46,10,10,0,0,0-5.27-1.34q-.51,0-1,0a10,10,0,0,0-4.31,1.31A10.88,10.88,0,0,1,12.5,9,11,11,0,0,1,6.77,7.51,10,10,0,0,0,1.5,6.17a.5.5,0,0,1,0-1A11.06,11.06,0,0,1,7.23,6.62,10,10,0,0,0,12.5,8a10,10,0,0,0,5.27-1.35,10.9,10.9,0,0,1,4.7-1.41c.32,0,.66,0,1,0a11.06,11.06,0,0,1,5.73,1.45A10,10,0,0,0,34.49,8a10,10,0,0,0,5.27-1.35,11.06,11.06,0,0,1,5.73-1.45,11,11,0,0,1,5.72,1.45A10,10,0,0,0,56.49,8a10,10,0,0,0,5.27-1.35,11.06,11.06,0,0,1,5.73-1.45c.37,0,.72,0,1.05,0a10.85,10.85,0,0,1,4.68,1.41A10,10,0,0,0,78.49,8a10,10,0,0,0,5.28-1.35A11.06,11.06,0,0,1,89.5,5.17a.5.5,0,0,1,0,1,10.06,10.06,0,0,0-5.28,1.34A10.89,10.89,0,0,1,78.49,9Z')
  
				symbol#Ketchup(data-name='Ketchup')
					path.ketchup(d='M83.3.22,2,0H2A2,2,0,0,0,2,4H4.2V4.6A2,2,0,0,0,6.14,6.65h.05a2,2,0,0,0,2-1.95V4h6.07V7.37a2,2,0,0,0,4,0V4l5.93,0v.56a2,2,0,0,0,1.95,2h.05a2,2,0,0,0,2-1.95V4.07l36,.1v.47a2,2,0,0,0,2,2.05h0a2,2,0,0,0,2-1.95V4.18h6.07V6.41a2,2,0,0,0,4,0V4.2l5,0h0a2,2,0,1,0,0-4Z')

				symbol#Mustard(data-name='Mustard')
					path.mustard(d='M130.86,122.87H49.56a2,2,0,0,0,0,4H56.5V128a2,2,0,0,0,4,0v-1.13H71.7A2,2,0,0,0,73.5,128a2,2,0,0,0,1.79-1.13H102.7a2,2,0,0,0,1.8,1.13,2,2,0,0,0,1.79-1.13H116.5V128a2,2,0,0,0,4,0v-1.13h2V128a2,2,0,0,0,4,0v-1.13h4.36a2,2,0,0,0,0-4Z', transform='translate(-47.56 -122.87)')

				symbol#Onion_Ring(data-name='Onion Ring', viewbox='0 0 32.38 13.22')
					path.onion-ring-mid(d='M74.39,127.87c.34.32.78.64.5.91-.44.42-2.38.47-3.19.79s-.92,1.07-2,1.25-2.48-.31-3.68-.3-2.63.5-3.67.34-1.2-.92-2-1.23-2.75-.35-3.21-.76c-.3-.29.23-.65.57-1H52.17c.52.51,1.84.95,2.36,1.43.68.63.34,1.54,1.57,2s3.57.32,5.19.57,3,1,4.76,1,3.19-.76,4.75-1,4-.15,5.18-.63.86-1.39,1.53-2c.47-.44,1.6-.85,2.19-1.31Z', transform='translate(-52.17 -127.87)')
					path.onion-ring-shadow(d='M78.75,127.87a10.16,10.16,0,0,0-1.72,1c-.66.63-.31,1.54-1.53,2s-3.56.36-5.18.63-2.95,1-4.75,1-3.2-.73-4.76-1-3.68-.13-5-.5a1.93,1.93,0,0,0,.43.23c1.23.47,3.57.32,5.19.57s3,1,4.77,1,3.19-.76,4.75-1,4-.15,5.18-.63.86-1.39,1.53-2c.47-.44,1.6-.85,2.18-1.31Z', transform='translate(-52.17 -127.87)')


			//bg
			g#bg(:class="`t${tier}`")
				rect.bg-fill(
				x="0" 
				y="0" 
				:width="176" 
				:height="248")

				rect.bg-square(v-for="square in bgPattern"
				:x="square.x",
				:y="square.y",
				:width="patternSize",
				:height="patternSize")

				// border
				path.bg-border(d="M176,4V248H4V4H176m4-4H0V252H180V0Z")

			// title
			g#title
				path#bg(d="M161.83,45.63H18.76a5.58,5.58,0,0,1-5.57-5.58V18a5.58,5.58,0,0,1,5.57-5.57H161.83A5.58,5.58,0,0,1,167.4,18v22A5.58,5.58,0,0,1,161.83,45.63Z")
				text.title(x="50%" y="28",
				alignment-baseline="middle",
				:width="180",
				text-anchor="middle") {{ name }}

			// burger
			burger(:model="burger")

			// ingredients list (cost)
			ingredients-list(:model="burger")
</template>

<script>
import { CARD_DIMENSIONS, TIER_COLOURS, COLOURS } from '../../assets/data/'
import { TIERS } from '../../assets/data';

import Burger from './burger.vue'
import IngredientsList from './ingredients-list.vue'
import { burger } from '../../assets/data/models'

export default {
	components: {
		Burger,
		IngredientsList
	},

	props: {
		tier: {
			type: Number,
			default: 0
		},

		name: {
			type: String,
			default: ''
		}
	},

	data: () => {
		return {
			width: CARD_DIMENSIONS.V_WIDTH,
			height: CARD_DIMENSIONS.V_HEIGHT,

			patternSize: CARD_DIMENSIONS.REAR_PATTERN_SIZE,

			bgPattern: [],

			burger
		}
	},

	computed: {
		injectedDefs(){
		
			console.log('tier', this.tier)
			const { border, bg } = TIER_COLOURS[`t${this.tier}`]
			return `
			<style>

			${ this.getTierStyleDefs(this.tier) }

			.clipping-mask { fill:none; }

			/* Sesami seed */
			ellipse.seed-fg { fill: ${COLOURS.SESAMI_SEED_FG}; }
			ellipse.seed-bg { fill: ${COLOURS.SESAMI_SEED_BG}; }

			/* Bun */
			.bun-mid { fill: ${COLOURS.BUN_MID}; }
			.bun-shadow { fill: ${COLOURS.BUN_SHADOW}; }

			/* Patty */
			.patty-mid { fill: ${COLOURS.PATTY_MID}; }
			.patty-shadow { fill: ${COLOURS.PATTY_SHADOW}; }

			g#title { fill: ${COLOURS.DARK_GREY}; }
			
			g#title text { 
				font-size:1em !important;
				font-family:GorgeousGirls, Gorgeous Girls;
				letter-spacing:-0.01em; 
				fill: #fff;	
			}

			rect#bg-cost { fill: ${COLOURS.DARK_GREY}; }
			path#name_area_bg { fill: ${COLOURS.DARK_GREY}; }
			g#bg rect.bg-square { fill: #fff; }

			/* Fried Egg */
			.fried-egg-white { fill: ${COLOURS.FRIED_EGG_WHITE}; }
			.fried-egg-yolk-mid{ fill: ${COLOURS.FRIED_EGG_YOLK_MID};  }
			.fried-egg-yolk-shadow{ fill: ${COLOURS.FRIED_EGG_YOLK_SHADOW}; }

			/* Cheese */
			.cheese-mid { fill: ${COLOURS.CHEESE_MID}; }
			.cheese-shadow { fill: ${COLOURS.CHEESE_SHADOW}; }

			/* Salad */
			.salad-green{ fill:${COLOURS.SALAD_GREEN}; }
			.tomato-shadow{ fill:${COLOURS.TOMATO_SHADOW}; }
			.tomato-mid{ fill:${COLOURS.TOMATO_MID}; }
		
			/* Gerkins */
			.gerkin-clip-path{clip-path:url(#gerkin-clip-path);}
      .gerkin-back{ fill:${COLOURS.GERKIN_SHADOW}; stroke:${COLOURS.GERKIN_OUTER}; stroke-miterlimit:10;stroke-width:1.23px;}
      .gerkin-mid{ fill:${COLOURS.GERKIN_MID}; }

			/* Bacon */
			.bacon-shadow{ fill:${COLOURS.BACON_SHADOW}; } 
			.bacon-mid{ fill:${COLOURS.BACON_MID}; }

			/* Onion Ring */
			.onion-ring-mid{ fill:${COLOURS.ONION_RING_MID}; }
			.onion-ring-shadow{ fill:${COLOURS.ONION_RING_SHADOW}; }
			
			/* Ketchup */
			.ketchup { fill:${COLOURS.KETCHUP}; }

			/* Mustard */
			.mustard { fill:${COLOURS.MUSTARD}; }

			</style>
			`
		},
		backgroundClass(){
			return `t${this.tier}`
		}
	},

	methods: {
		drawBGPattern(){
			const wMinusB = CARD_DIMENSIONS.WIDTH - (CARD_DIMENSIONS.BORDER_SIZE * 2)
			const hMinusB = CARD_DIMENSIONS.HEIGHT - (CARD_DIMENSIONS.BORDER_SIZE * 2)
			const cols = (wMinusB / CARD_DIMENSIONS.REAR_PATTERN_SIZE)
			const rows = (hMinusB / CARD_DIMENSIONS.REAR_PATTERN_SIZE)
			
			let pattern = []
			for(let i=0; i < rows; i++){
				const ym = i
				const y = ym * (CARD_DIMENSIONS.REAR_PATTERN_SIZE)
				for(let j=0; j < cols; j++){
					const xm = j
					const x = xm * (CARD_DIMENSIONS.REAR_PATTERN_SIZE)
					// only place alternating tiles. Checkerboard pattern
					if(i % 2 !== j % 2) pattern.push({ x, y })
				}
			}

			return pattern
		},

		getTierStyleDefs(tier){
			const { border, bg } = TIER_COLOURS[`t${tier}`]
			return `
			g#bg.t${tier} rect.bg-fill { fill:${ bg }; }
			g#bg.t${tier} path.bg-border { fill:${ border }; }
			`
		}
	},

	created(){
		this.bgPattern = this.drawBGPattern()
	}
}
</script>


<style lang="sass">
	div.card
		svg
			display: block
			border: 0
			margin: 0
</style>
