$(function () {
  'use strict';

  const $mainChatList = $('.main-chat-list');
  if ($mainChatList.length) {
    new PerfectScrollbar($mainChatList[0], {
      suppressScrollX: true
    });
  }

  const $chatBody = $('#ChatBody');
  if ($chatBody.length) {
    new PerfectScrollbar($chatBody[0], {
      suppressScrollX: true
    });
  }

  const $chatAccount = $('.chat-account');
  if ($chatAccount.length) {
    new PerfectScrollbar($chatAccount[0], {
      suppressScrollX: true
    });
  }
});
