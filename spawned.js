setInterval(() => {
    process.stdout.write(' . ');
}, 1000);

process.stdin.on('data', function(){
    console.log('Stopped by Parent. ');
    process.exit();
});