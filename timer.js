function timer(id, deadLine) {

	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;

		const timer = document.querySelector('.promotion__timer'),
			timerText = timer.querySelector('.title'),
			timerDate = timer.querySelectorAll('.timer__block');


		const t = Date.parse(endtime) - Date.parse(new Date());

		if (t <= 0) {
			timerText.textContent = 'К прибольшому сожалению акция уже закончилась...';
			timerText.style.cssText = 'margin-top: 15%; text-align: center; margin-left:  5%; font-size: 40px';

			timerDate.forEach((item) => {
				item.remove();
			});
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24));
			hours = Math.floor((t / (1000 * 60 * 60) % 24));
			minutes = Math.floor((t / 1000 / 60) % 60);
			seconds = Math.floor((t / 1000) % 60);
		}

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock(id, deadLine);

}

export default timer;