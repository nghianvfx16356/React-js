
export const darg = function (boxes, target) {
    let currentTar = null;
    target.forEach(tar => {
        tar.addEventListener('dragstart', function (e) {
            this.classlist.add('dragging')
            currentTar = this;
        }
        )
        tar.addEventListener('dragend', function (e) {
            this.classlist.remove('dragging');
            currentTar = this;
        })
    })
    boxes.forEach(box => {
        box.addEventListener('dragover', function (e) {
            e.preventDefault()
            this.appendChild(currentTar)
        })
        box.addEventListener('drop', function (e) {
            this.appendChild(currentTar)
        })
    })

}