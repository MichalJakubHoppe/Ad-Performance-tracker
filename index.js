const adData = {
    facebook: {
        site: 'Facebook',
        adViews: 23477,
        clicks: 210,
        conversions: 5,
    },
    twitter: {
        site: 'Twitter',
        adViews: 13904,
        clicks: 192,
        conversions: 9,
    },
    instagram: {
        site: 'Instagram',
        adViews: 3256,
        clicks: 200,
        conversions: 2,
    }
}



class AdvertisingChannel {
    constructor(data){
        Object.assign(this, data)
        this.conversionRate=this.conversions/this.clicks*100.
    }
    getAdvertisingChannelHtml(){
        return `<div class="site-name"> ${this.site}</div>
                <div>Views: ${this.adViews} </div>
                <div>Clicks: ${this.clicks} </div>
                <div>Conversions: ${this.conversions}</div>
                <div>Conv. Rate: <span class="highlight"> ${this.conversionRate.toFixed(1)} %</span></div> `
    }
}

let fb= new AdvertisingChannel(adData.facebook)
let twitter= new AdvertisingChannel(adData.twitter)
let insta=new AdvertisingChannel(adData.instagram)

document.getElementById('fb').innerHTML =fb.getAdvertisingChannelHtml()
document.getElementById('twit').innerHTML =twitter.getAdvertisingChannelHtml()
document.getElementById('insta').innerHTML=insta.getAdvertisingChannelHtml()