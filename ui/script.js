window.addEventListener('load', async () => {
	const wrapper = document.getElementById('wrapper');
	const exit = document.getElementById('exit');
	const appsList = document.getElementById('apps');
	const frame = document.getElementById('frame');
	const monitor = document.querySelector('.c-monitor');

	window.addEventListener('message', e => {
		if (e.data.type == 'openframe') {
			wrapper.style.display = 'block';
		}
	});

  document.addEventListener('keyup', e => {
    if (e.key == 'Escape') {
      wrapper.style.display = 'none';
    }
  });

	exit.addEventListener('click', () => {
		if (frame.src) {
			monitor.style.display = 'flex';
			frame.src = 'about:blank';
		}
	});

	const apps = await (await fetch('./apps.json')).json();
	for (const id in apps) {
		const app = apps[id];
		const appBtn = document.createElement('button');
		const appImg = document.createElement('img');
		appBtn.id = id;
		appImg.src = app.logo;
		appImg.alt = 'app';
		appBtn.style.backgroundColor = app.background;

		appBtn.addEventListener('click', () => {
			if (frame.src !== app.url) {
				frame.src = app.url;
				monitor.style.display = 'none';
			}
		});

		appBtn.appendChild(appImg);
		appsList.appendChild(appBtn);
	}
});
