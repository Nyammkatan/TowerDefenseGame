export default {

    getFrames(image, starti, startj, size, length){
        let frames = [];
        for (let i=0; i < length; i++){
            let subimage = mainGame.p.gimages[image].get(startj*size, starti*size, size, size);
            frames.push(subimage);
            startj++;
        }
        return frames;
    }

}