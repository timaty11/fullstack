import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

const socket = io('localhost:3030');

const create_room_button = document.getElementById('room_create_button');
const create_room_input = document.getElementById('room_name_input');
// const join_room_button = document.getElementById("join_room_button");

var cur_room_name = '';
var cur_attack_damage = 0;
var cur_diesel = 10;
var cur_diesel_usage = 0;

var selected_card_id = '';

let player;

socket.on('connect', () => {
});

socket.on('add_room', (room_name) => {
  displayRoom(room_name);
});

socket.on('waiting_opponent', () => {
  document.getElementById('room_list').remove();

  const div = document.createElement('div');
  div.textContent =
    "You've connected to room: " +
    cur_room_name +
    '. Waiting the second player to connect...';
  div.id = 'room_list';

  document.getElementById('main').append(div);
});

socket.on('start_game', (room_name) => {
  document.getElementById('room_list').remove();

  const div = document.createElement('div');
  div.textContent =
    "You've connected to room: " + cur_room_name + '. STARTING EPTA';
  div.id = 'dro4';

  const end_turn_div = document.createElement('div');
  const end_turn_button = document.createElement('button');

  end_turn_button.textContent = 'End turn';
  end_turn_button.id = 'end_turn_button';
  end_turn_button.addEventListener('click', (e) => {
    e.preventDefault();

    socket.emit('end_turn', room_name);
  });

  end_turn_div.append(end_turn_button);
  document.getElementById('main').append(div);
  document.getElementById('main').append(end_turn_div);
});

socket.on('player_data', (player_card) => {
  player = player_card;
});

//// GAME EVENTS
socket.on('display_bases', (ally_base_card, opponent_base_card) => {
  // Draw the battle field
  const battle_field = document.createElement('div');
  battle_field.classList = 'battlefield';
  // Ally part of the field
  const base_opponent = document.createElement('div');
  base_opponent.classList = 'base_opponent';
  const my_base = document.createElement('div');
  my_base.classList = 'my_base';

  const ally_field = document.createElement('div');
  ally_field.id = 'ally_field';

  const ally_field_cards = document.createElement('div');
  ally_field_cards.id = 'ally_field_cards';

  const ally_base = document.createElement('img');
  ally_base.id = 'ally_base';

  const ally_base_hp = document.createElement('div');
  ally_base_hp.id = 'ally_hp';
  ally_base_hp.textContent = '30';

  ally_base.src = '../public/assets/' + ally_base_card + '.png';
  my_base.append(ally_base);
  my_base.append(ally_base_hp);
  ally_field.append(my_base);
  ally_field.append(ally_field_cards);

  // Opponent part of the field
  const opponent_field = document.createElement('div');
  opponent_field.id = 'opponent_field';

  const opponent_field_cards = document.createElement('div');
  opponent_field_cards.id = 'opponent_field_cards';

  const opponent_base = document.createElement('img');
  opponent_base.id = 'opponent_base';

  const opponent_base_hp = document.createElement('div');
  opponent_base_hp.id = 'opponent_hp';
  opponent_base_hp.classList = 'hp';
  opponent_base_hp.textContent = '30';

  opponent_base.addEventListener('click', (e) => {
    e.preventDefault();

    if (cur_attack_damage === '') {
      alert('No card selected!');
    } else {
      if (cur_diesel >= cur_diesel_usage) {
        socket.emit(
          'base_attack',
          cur_room_name,
          'opponent_hp',
          parseInt(
            document.getElementById('opponent_hp').textContent
          ),
          cur_attack_damage
        );

        // Decrease available diesel amount
        cur_diesel = cur_diesel - cur_diesel_usage;
        const diesel_icon_list =
          document.getElementsByClassName('diesel_unused');
        for (let i = diesel_icon_list.length - 1; i >= cur_diesel; i--) {
          diesel_icon_list[i].classList = 'diesel_used';
        }
      } else {
        alert('Not enough diesel!');
      }
    }
  });

  opponent_base.src = '../public/assets/' + opponent_base_card + '.png';
  base_opponent.append(opponent_base_hp);
  base_opponent.append(opponent_base);
  opponent_field.append(base_opponent);
  opponent_field.append(opponent_field_cards);
  // opponent_field.append(opponent_base);

  // Add diesel
  const diesel = document.createElement('div');
  for (let i = 0; i < 10; i++) {
    var new_diesel = document.createElement('img');
    new_diesel.classList = 'diesel_unused';
    new_diesel.id = 'diesel' + i.toString();
    new_diesel.src = '../public/assets/diesel.png';
    diesel.append(new_diesel);
  }

  document.getElementById('dro4').append(diesel);
  battle_field.append(ally_field);
  battle_field.append(opponent_field);
  document.getElementById('main').append(battle_field);
});

// Display card dependant on its type - ally or opponent
socket.on('display_card', (card, card_id, card_field) => {
  const new_card_div = document.createElement('div');

  const new_card = document.createElement('button');
  const new_card_img = document.createElement('img');
  new_card_img.classList = 'card';
  new_card_img.src = '../public/assets/' + card.nation + card.name + '.png';

  const new_card_hp = document.createElement('div');
  new_card_hp.textContent = card.def.toString();
  new_card_hp.classList = 'hp';

  const new_card_diesel = document.createElement('div');
  new_card_diesel.textContent = card.diesel.toString();
  new_card_diesel.classList = 'diesel';

  const new_card_attack = document.createElement('div');
  new_card_attack.textContent = card.attack.toString();
  new_card_attack.classList = 'attack';

  new_card_div.classList = 'card_div';
  new_card_div.id = card_id;

  //// TEMP DRO4
  new_card.textContent = card.name;
  new_card.classList = 'card_attack_button';

  if (card_field === 'ally_field') {
    new_card.addEventListener('click', (e) => {
      e.preventDefault();
      cur_attack_damage = card.attack;
      cur_diesel_usage = card.diesel;

      // Check if the card was selected again. If so - unselect it
      if (selected_card_id === card_id) {
        selected_card_id = '';
        new_card_img.classList = 'card';
      } else {
        if (selected_card_id !== '') {
          document.getElementsByClassName('selected_card')[0].classList = 'card';
        }
        selected_card_id = card_id;
        new_card_img.classList = 'selected_card';
      }
    });
  } else {
    new_card.addEventListener('click', (e) => {
      e.preventDefault();

      if (selected_card_id === '') {
        alert("No card selected!");
      } else {
        if (cur_diesel >= cur_diesel_usage) {
          socket.emit(
            'card_attack',
            cur_room_name,
            card_id,
            parseInt(new_card_hp.textContent),
            cur_attack_damage
          );

          // Decrease available diesel amount
          cur_diesel = cur_diesel - cur_diesel_usage;
          const diesel_icon_list =
            document.getElementsByClassName('diesel_unused');
          for (let i = diesel_icon_list.length - 1; i >= cur_diesel; i--) {
            diesel_icon_list[i].classList = 'diesel_used';
          }
        } else {
          alert('Not enough diesel!');
        }
      }
    });
  }

  new_card_div.append(new_card);
  new_card_div.append(new_card_img);

  new_card_div.append(new_card_hp);
  new_card_div.append(new_card_diesel);
  new_card_div.append(new_card_attack);
  document.getElementById(card_field + '_cards').append(new_card_div);
});

socket.on('decrease_hp', (card_id, new_hp) => {
  var temp = document.getElementById(card_id);
  var old_hp = temp.getElementsByClassName('hp')[0];
  old_hp.textContent = new_hp;
});

socket.on('base_decrease_hp', (card_id, new_hp) => {
  var old_hp = document.getElementById(card_id);
  old_hp.textContent = new_hp;
});

socket.on('destroy_card', (card_id) => {
  document.getElementById(card_id).remove();
});

socket.on('ally_turn', () => {
  alert('Your turn!');
  cur_diesel = 10;
  const diesel_icon_list = document.getElementsByClassName('diesel_used');
  for (let i = diesel_icon_list.length - 1; i >= 0; i--) {
    diesel_icon_list[i].classList = 'diesel_unused';
  }

  const buttons = document.getElementsByClassName('card_attack_button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  document.getElementById('end_turn_button').disabled = false;
});

socket.on('opponent_turn', () => {
  const buttons = document.getElementsByClassName('card_attack_button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  document.getElementById('end_turn_button').disabled = true;
});

socket.on('end_game', (end_message) => {
  alert(end_message);
  window.location.href = '/fields';
});

create_room_button.addEventListener('click', (e) => {
  e.preventDefault();
  const room_name = create_room_input.value;

  if (room_name === '') return;

  create_room_input.value = '';

  socket.emit('create_room', room_name);
});

function displayRoom(room_name) {
  const div = document.createElement('div');
  div.classList = 'room_name_div';

  const div_room_name = document.createElement('div');
  div_room_name.textContent = room_name;
  div_room_name.classList = 'room_name';

  const div_join_button = document.createElement('button');
  div_join_button.textContent = 'JOIN ROOM';
  div_join_button.id = room_name;
  div_join_button.classList = 'btn btn-outline-secondary';
  eventListener_for_join_button(div_join_button);

  div.append(div_room_name);
  div.append(div_join_button);

  document.getElementById('room_list').append(div);
}

function eventListener_for_join_button(button) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    cur_room_name = button.id.toString();
    join_room(cur_room_name);
  });
}

function join_room(room_name) {
  socket.emit('join_room', room_name);
}
