function navigate(section) {
    switch(section) {
        case 'videos':
            alert("Navigating to Watch Videos section...");
            break;
        case 'skills':
            alert("Navigating to Basic Skills section...");
            break;
        case 'learn':
            alert("Navigating to Learn More section...");
            break;
        default:
            alert("Section not found!");
    }
}