/**
* Inspired by: @credit umcconnell
*/
export function loadingAnimation(
    initialText = "",
    chars = ["⠙", "⠘", "⠰", "⠴", "⠤", "⠦", "⠆", "⠃", "⠋", "⠉"],
    delay = 100
) {
    let x = 0;
    let text = initialText;
    const intervalId = setInterval(() => {
        process.stdout.write(`\r${chars[x++]} ${text}\x1b[K`);
        x %= chars.length;
    }, delay);

    return {
        pipe(newText) {
            text = newText;
        },
        stop() {
            clearInterval(intervalId);
            process.stdout.write("\r\x1b[K");
        },
    };
}