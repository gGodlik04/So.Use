addEventListener ('DOMContentLoaded', function(){


    const bootstrap = this.document.createElement('script');
    bootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';
    bootstrap.integrity = "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm";
    bootstrap.crossOrigin = 'anonymous';
    console.log(bootstrap);
    this.document.head.append(bootstrap);

})