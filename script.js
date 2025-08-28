fetch('info.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('facts');
    data.facts.forEach(fact => {
      const li = document.createElement('li');
      li.textContent = fact;
      list.appendChild(li);
    });
  });
