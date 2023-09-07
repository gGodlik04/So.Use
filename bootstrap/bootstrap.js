addEventListener ('DOMContentLoaded', function(){

    //js bundle

    const bootstrap = this.document.createElement('script');

    bootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';
    bootstrap.integrity = "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm";
    bootstrap.crossOrigin = 'anonymous';
    console.log(bootstrap);
    this.document.head.append(bootstrap);

    //css bundle
    
    const bootstrapCss = this.document.createElement('link');

    bootstrapCss.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css';
    bootstrapCss.rel = 'stylesheet';
    bootstrapCss.integrity = 'sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9';
    bootstrapCss.crossOrigin = 'anonymous';
    this.document.head.append(bootstrapCss);
})