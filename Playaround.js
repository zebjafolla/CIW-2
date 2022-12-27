document.anchors[3].href = 'https://www.google.com';
for (i = 0; i < 1; i++)
{
    console.log(document.anchors[i].name);
}
document.write()

// Write a function that gets all the anchor elements in the document and logs their name attribute and href attribute to the console.
function attributes()
{
    for (i = 0; i < document.anchors.length; i++)
    {
        console.log(document.anchors[i].name + document.anchors[i].href);
    }
}
