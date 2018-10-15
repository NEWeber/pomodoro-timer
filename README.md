Attribution for sound effects:

[Alarm](https://freesound.org/people/kwahmah_02/sounds/250629/) by [kwahmah_02](https://freesound.org/people/kwahmah_02/)

[Chips](http://soundbible.com/2204-Poker-Chips.html) by Daniel Simion

[Ticking](https://freesound.org/people/InspectorJ/sounds/343130/) by [InspectorJ](https://freesound.org/people/InspectorJ/)

[Chime](https://freesound.org/people/LaCezio/sounds/320492/) by [LaCezio](https://freesound.org/people/LaCezio/)

Play button:
```html
<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
```

reset button:
<div>Icons made by <a href="https://www.flaticon.com/authors/anton-saputro" title="Anton Saputro">Anton Saputro</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

TODO:
- ~Void pomodoro button to reset clock~
- ~Style the page!~
- ~Create cookie with:~
  - ~number of completed pomodoros~
  - ~last visited~
- ~Read cookie and show modal on 2, 5, 10, 20, 50, 90, 120 completed~
- ~Create sub modal~
  - ~Invite to join list~
  - ~form with email and first name~
  - ~Make responsive~
  - ~Buttons:~ 
    - ~Decline closes modal (can't close otherwise)~ 
    - ~sign up:~
      - ~verifies the form fields~
      - ~displays thank you/confirm email message~
      - ~sends signal to API~
  - ~api to send to 3rd party sub place on submit~
  - ~Style modal~
    - ~Style buttons~
    - ~Style Form~
      - ~Style labels~
      - ~Style input boxes~
- ~Make wav files into mp3 files & optimize~
- ~remove nav at top~
- ~List sound & icon attribution in footer~
- Google analytics

v 1.0.1
- Catch server-side verification errors in `SignUp.vue`
- Use `hasSignedUp` in store properly and use in `SignUp.vue`
- Have a button to sign up for email after first offer without waiting for modal to come up again
- Fix audio so that it starts clicking after 1 sec, not immediately. 

v. 1.1
- Make transition from end of timer/restart timer better.
- Fix style scoping in `TimerSection.vue`
- Add the number completed to the store and read off cookie on load to set the number.
- Create banner ads for pomodoro products
- fix button on timer to show/hide icon & call different function, rather than swapping button (accessible, focus stays)
- Style Modal
  - Style Errors
- Add cookie disclaimer


v. 2:
- Nicer buttons (drop shadow, animate on click, etc.)
- Vary pomodoro length?
- Different sound selections
- Blog
- Daily list/commit to task/start pomodoro
- Check off todo items
- Celebration Effect?

v. 3 
- Cookie update, add:
  - declined (don't show till next threshold)? Only pops modal when threshold is crossed, so maybe don't need this?
  - Sub status
- Activity inventory
- status checking
- Record sheet
- Priortization 
