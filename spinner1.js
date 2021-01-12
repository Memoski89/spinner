/* process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);
setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);
setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);



 */

/* const spinner = (items) => {
  let interval = 100;
  for (let item of items) {
    setTimeout(() => {
      process.stdout.write(`\r${item}`);
    }, interval);
    interval += 200;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, interval);
};
spinner("|/-\\|/-\\|");
 */


const input = process.argv.splice(2).sort((a,b) => (a-b));;
const nums = input.map(Number);
const beeper = () => {
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0 && !isNaN(nums[i])) {
      let timer = ((nums[i])*1000)
      setTimeout(() => {
      process.stdout.write('\x07');
      }, timer);
    }
  }
}
beeper();