import { io } from './index.js';
import { rendomizer } from './helpers/rendomizer.js';
import { Card } from './models/card.js';

let clients = [];

export const getSocket = (socket) => {
  console.log(`Client with id ${socket.id} connected`);
  clients.push(socket.id);

  let player1;
  let player2;

  // let clients_in_the_room_list = [];

  // socket.emit('message', "I'm server");

  socket.on('create_room', (room_name) => {
    io.emit('add_room', room_name);
  });

  socket.on('join_room', (room_name) => {
    socket.join(room_name);

    // Check how many users connected to the room
    // If 2 then send start game
    if (io.sockets.adapter.rooms.get(room_name).size === 2) {
      io.to(room_name).emit('start_game', room_name);
      var clients_in_the_room = io.sockets.adapter.rooms.get(room_name);

      const iterator1 = clients_in_the_room[Symbol.iterator]();
      var clients_in_the_room_list = [];
      clients_in_the_room_list.push(iterator1.next().value);
      clients_in_the_room_list.push(iterator1.next().value);

      player1 = new Card(clients_in_the_room_list[0], 3, 30, 1);
      player2 = new Card(clients_in_the_room_list[1], 3, 30, 1);

      // player2.addCard();

      io.to(clients_in_the_room_list[0]).emit(
        'display_bases',
        'base/german',
        'base/USA'
      );
      io.to(clients_in_the_room_list[1]).emit(
        'display_bases',
        'base/USA',
        'base/german'
      );

      io.to(clients_in_the_room_list[0]).emit('ally_turn');
      io.to(clients_in_the_room_list[1]).emit('opponent_turn');

      io.to(room_name).emit('player_data');
      // io.to(clients_in_the_room_list[1]).emit('player_data');

      // Give 3 cards to each player
      // To display 1 card we need to send 2 emits - to both users
      for (let i = 0; i < 3; i++) {
        var card_id = rendomizer(9);
        io.to(clients_in_the_room_list[1]).emit(
          'display_card',
          player1.userCard[i],
          card_id,
          'ally_field'
        );
        io.to(clients_in_the_room_list[0]).emit(
          'display_card',
          player1.userCard[i],
          card_id,
          'opponent_field'
        );
      }

      for (let i = 0; i < 3; i++) {
        var card_id = rendomizer(9);
        io.to(clients_in_the_room_list[1]).emit(
          'display_card',
          player2.userCard[i],
          card_id,
          'opponent_field'
        );
        io.to(clients_in_the_room_list[0]).emit(
          'display_card',
          player2.userCard[i],
          card_id,
          'ally_field'
        );
      }
    } else {
      socket.emit('waiting_opponent');
    }
  });

  socket.on('card_attack', (room_name, card_id, card_hp, attack_damage) => {
    if (card_hp - attack_damage <= 0) {
      io.to(room_name).emit('destroy_card', card_id);
    } else {
      io.to(room_name).emit('decrease_hp', card_id, card_hp - attack_damage);
    }
  });

  socket.on('base_attack', (room_name, card_id, base_hp, attack_damage) => {
    if (base_hp - attack_damage <= 0) {
      socket.broadcast.to(room_name).emit('end_game', 'Defeat!');
      socket.emit('end_game', 'Victory!');
    } else {
      socket.broadcast
        .to(room_name)
        .emit('base_decrease_hp', card_id, base_hp - attack_damage);
      socket.emit('base_decrease_hp', card_id, base_hp - attack_damage);
    }
  });

  socket.on('end_turn', (room_name) => {
    socket.broadcast.to(room_name).emit('ally_turn');
    socket.emit('opponent_turn');

    var clients_in_the_room = io.sockets.adapter.rooms.get(room_name);
    const iterator1 = clients_in_the_room[Symbol.iterator]();
    var clients_in_the_room_list = [];
    clients_in_the_room_list.push(iterator1.next().value);
    clients_in_the_room_list.push(iterator1.next().value);

    const player = new Card('dayn', 3, 30, 1);

    var card_id = rendomizer(9);
    var new_card = player.addCard();

    if (socket.id === clients_in_the_room_list[0]) {
      io.to(clients_in_the_room_list[1]).emit(
        'display_card',
        new_card,
        card_id,
        'ally_field'
      );

      io.to(clients_in_the_room_list[0]).emit(
        'display_card',
        new_card,
        card_id,
        'opponent_field'
      );
    } else {
      io.to(clients_in_the_room_list[0]).emit(
        'display_card',
        new_card,
        card_id,
        'ally_field'
      );

      io.to(clients_in_the_room_list[1]).emit(
        'display_card',
        new_card,
        card_id,
        'opponent_field'
      );
    }
  });

  socket.on('disconnect', () => {
    clients.splice(clients.indexOf(socket.id), 1);
    console.log(`Client with id ${socket.id} disconnected`);
  });
};
