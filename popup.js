document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('url').value;
    chrome.storage.sync.set({ defaultUrl: url }, function() {
        var feedback = document.getElementById('feedback');
        feedback.style.opacity = 1;
        setTimeout(function() {
            feedback.style.opacity = 0;
        }, 2000);
    });
});
// Event listener for the new button
document.getElementById('setCurrentTab').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTabUrl = tabs[0].url;
        chrome.storage.sync.set({ defaultUrl: currentTabUrl }, function() {
            var feedback = document.getElementById('feedback');
            feedback.textContent = 'Current tab set as default!';
            feedback.style.opacity = 1;
            setTimeout(function() {
                feedback.style.opacity = 0;
            }, 2000);
        });
    });
});