<section class="videoUpload">
    <div class="overlay"></div>
    <div class="sidebar">
        <h3>Upload a video</h3> 
        <svg class="close-this" xmlns="http://www.w3.org/2000/svg" width="22.627" height="22.627" viewBox="0 0 22.627 22.627">
            <path id="Union_1" data-name="Union 1" d="M10.607,10.607,0,21.213,10.607,10.607,0,0,10.607,10.607,21.213,0,10.607,10.607,21.213,21.213Z" transform="translate(0.707 0.707)" fill="none" stroke="#000" stroke-width="2"/>
        </svg>

        <form action="">
            <div class="formGroup">
                <label>Syllabus</label>
                <input type="text">
            </div>
            <div class="split">
                <div class="formGroup">
                    <label>Grade</label>
                    <input type="text">
                </div>
                <div class="formGroup">
                    <label>Subject</label>
                    <input type="email">
                </div>
            </div>
            <div class="formGroup">
                <label>Description</label>
                <input type="password">
            </div>
            <div class="uploadBx">   
                <input type="file" hidden id="videoUpload" accept="video/mp4,video/x-m4v,video/*" name="myFile">             
                <label for="videoUpload">
                    <h4>Click here to upload your file</h4>
                    <p>supported formats .mp4 .mkv</p>
                </label>
            </div>
            <div class="formGroup">
                <input type="submit" value="Upload">
            </div>
        </form>
    </div>
</section>