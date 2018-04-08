(() => {
  const sidenav = document.getElementById('sidenav');
  const sidedarken = document.getElementById('sidedarken');
  const navRandom = document.getElementById('nav-random');

  const data = [
    'owo what\'s this?',
    'Hello there!',
    'UwU it\'s alright',
    'it is wednesday my dudes',
    'Now selling: Passive HDMI to VGA cable'
  ];

  window.toggleNav = () => { // eslint-disable-line no-unused-vars
    if (sidenav.className === 'sidenavon') {
      sidenav.className = 'sidenavoff';
      sidedarken.className = 'sidedarkenoff';
      document.body.className = 'scroll';
    } else {
      // Generate a random message
      navRandom.innerHTML = data[Math.floor(Math.random()*data.length)];
      sidenav.className = 'sidenavon';
      sidedarken.className = 'sidedarkenon';
      document.body.className = 'noscroll';
    }
  };
})();
