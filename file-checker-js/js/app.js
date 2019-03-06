(function (d, axios) {
    "use strict";
    var inputFile = d.querySelector("#inputFile");
    var divNotification = d.querySelector("#alert");

    inputFile.addEventListener("change", addFile);


    function addFile(e) {
        var file = e.target.files[0];
        
        if (!file) {
            return;
        } else {
            upload(file);
        }
        
    }

    function upload(file) {
        var formData = new FormData();
        formData.append("file", file);
        $('.preload').addClass("preload-vis");
        post("http://10.10.10.32:8080/upload", formData)
            .then(function (rez) {
                $('.preload').removeClass("preload-vis");
                $('.block-content').addClass("block-report");
                $('.block-content form, .title-h, #content-home').addClass("hidden");
                // console.log(file);
                var result = rez.data,
                    res_data;

                function Heuristic(res) {
                    if (res.Heur == 0) {
                        var score_block = 'success';
                        var score_text = 'clean';
                    } else {
                        var score_block = 'danger';
                        var score_text = 'detect';
                    }
                    var NN = res.NN;

                    return `<div class="alert alert-${score_block}">Heuristic - ${score_text}</div>
                            <div class="NN"> NN: ( ${NN.g}; ${NN.b}; ${NN.u}; ) </div>`;
                }

                function butt_block(res) {

                    let hash = res.md5.hash,
                        f_size = res.md5.size,
                        value = res.criteria.value,
                        size = res.criteria.size,
                        diffss = res.criteria.diffss,
                        entr = res.criteria.entr,
                        impsec = res.criteria.impsec;

                    return `<div class="block-butt">
                                <button id="f_positive" class="files-btn" style="padding-left: 25px;" onClick="sendNNWhite_f('${hash}', '${f_size}', '${value}', '${size}', '${diffss}', '${entr}', '${impsec}');">
                                <svg width="28px" height="28px" viewBox="0 0 76 76" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="к&gt;&gt;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="False-Positive/Hover" class="svg-blue" fill="#FFFFFF">
                                            <path d="M27,47 C23.1340068,47 18,44.6944204 18,40 C18,35.3055796 23.1340068,29 27,29 C30.8659932,29 33,32.3055796 33,37 C33,41.6944204 30.8659932,47 27,47 Z M25.5,40 C27.9852814,40 28,45 29,45 C30,45 30,39 27,38 C24,37 19,40.3431458 19,42 C19,43.6568542 23.0147186,40 25.5,40 Z" id="Combined-Shape"></path>
                                            <path d="M52,47 C48.1340068,47 43,44.6944204 43,40 C43,35.3055796 48.1340068,29 52,29 C55.8659932,29 58,32.3055796 58,37 C58,41.6944204 55.8659932,47 52,47 Z M50.5,40 C52.9852814,40 53,45 54,45 C55,45 55,39 52,38 C49,37 44,40.3431458 44,42 C44,43.6568542 48.0147186,40 50.5,40 Z" id="Combined-Shape" transform="translate(50.500000, 38.000000) scale(-1, 1) translate(-50.500000, -38.000000) "></path>
                                            <path d="M38,15 C59,15 61,37 63,37 C64,37 63.0205271,34.5002473 61.7572368,31.1142456 C61.0635902,29.2550617 70.1907565,26.800569 63,19.2773817 C57,13 55.9772481,21.0419742 54.09603,19.2773817 C50.2761157,15.6942821 45.0361519,13 38,13 C31.0112255,13 25.7945315,15.6581208 21.9813266,19.2051236 C20.2487846,20.8167158 19.0004498,12.9994752 13,20 C7,27 15.0443968,28.9908478 14.2895376,30.9896384 C12.9869571,34.4387394 12.673321,37 13,37 C15,37 17,15 38,15 Z" id="Oval"></path>
                                            <path d="M38,48 C39.6568542,48 41,47.1045695 41,46 C41,44.8954305 41,44 38,44 C35,44 35,44.8954305 35,46 C35,47.1045695 36.3431458,48 38,48 Z" id="Oval"></path>
                                            <path d="M21,63 C24.8659932,63 28,60.7614237 28,58 C28,55.2385763 28,53 21,53 C14,53 14,55.2385763 14,58 C14,60.7614237 17.1340068,63 21,63 Z" id="Oval"></path>
                                            <path d="M53,63 C56.8659932,63 60,60.7614237 60,58 C60,55.2385763 60,53 53,53 C46,53 46,55.2385763 46,58 C46,60.7614237 49.1340068,63 53,63 Z" id="Oval" transform="translate(53.000000, 58.000000) scale(-1, 1) translate(-53.000000, -58.000000) "></path>
                                            <polygon id="Rectangle" points="4 37 7 37 7 58 70 58 70 37 73 37 73 62 4 62"></polygon>
                                        </g>
                                    </g>
                                </svg>False Positive</button>
                                <button id="malware" class="files-btn" onClick="sendNNWhite_m('${hash}', '${f_size}', '${value}', '${size}', '${diffss}', '${entr}', '${impsec}');">
                                <svg width="28px" height="28px" viewBox="0 0 77 77" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="к&gt;&gt;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Malware/Hover" class="svg-blue" fill="#FFFFFF">
                                            <path d="M52.002165,61.5204104 C59.7467791,57.0393976 64.9655132,48.6781172 64.9998297,39.0951067 L47.3391123,39.0454533 C47.3195548,42.1112713 45.647401,44.7849386 43.1687021,46.2204039 L52.002165,61.5204104 Z M52.002165,16.4795896 C48.177422,14.2666036 43.7366266,13 39,13 C34.2973569,13 29.8863152,14.248494 26.0802532,16.4321039 L34.8585667,31.7357934 C36.0770299,31.0402772 37.4876395,30.6428571 38.9910714,30.6428571 C40.5162901,30.6428571 41.9459766,31.0518789 43.1764262,31.7662177 L52.002165,16.4795896 Z M13,39 C13,48.588787 18.190746,56.9652103 25.9155914,61.4726233 L34.7874994,46.2053183 C32.3108678,44.7591258 30.6460795,42.0741105 30.6428618,39 L13,39 Z M39,68 C22.9837423,68 10,55.0162577 10,39 C10,22.9837423 22.9837423,10 39,10 C55.0162577,10 68,22.9837423 68,39 C68,55.0162577 55.0162577,68 39,68 Z M38.9910714,45.375 C42.5168178,45.375 45.375,42.5168178 45.375,38.9910714 C45.375,35.465325 42.5168178,32.6071429 38.9910714,32.6071429 C35.465325,32.6071429 32.6071429,35.465325 32.6071429,38.9910714 C32.6071429,42.5168178 35.465325,45.375 38.9910714,45.375 Z" id="Combined-Shape" transform="translate(39.000000, 39.000000) rotate(180.000000) translate(-39.000000, -39.000000) "></path>
                                        </g>
                                    </g>
                                </svg>Malware</button>
                            </div>`;
                }

                function fileDetailsHtml(fileDetails) {
                    return `<div class="panel" style="border: 0;">
                    <div class="panel-heading">
                    <h3 class="panel-title">File Details</h3>
                    </div>
                    <div class="panel-body">
                    <div class="table-responsive">
                    <table class="table table-bordered" style="margin-bottom: 0;">
                    <tr>
                    <td><strong>Name</strong></td>
                    <td>${fileDetails.name}</td>
                    </tr>
                    <tr>
                    <td><strong>File Size</strong></td>
                    <td>${fileDetails.md5.size}</td>
                    </tr>
                    <tr>
                    <td><strong>MD5</strong></td>
                    <td><a target="_blank" href="https://www.virustotal.com/#/file/${fileDetails.md5.hash}">${fileDetails.md5.hash}</a></td>
                    </tr>
                    <tr>
                    <td><strong>Company</strong></td>
                    <td>${fileDetails.company}</td>
                    </tr>
                    <tr>
                    <td><strong>Certificates</strong></td>
                    <td>${fileDetails.certificates}</td>
                    </tr>
                    <tr>
                    <td><strong>Subs</strong></td>
                    <td>${fileDetails.subs}</td>
                    </tr>
                    </table>
                    </div>
                    </div>
                    </div>`;
                }

                function signaturesBuilder(signaturesData) {
                    var signatures = "<tbody>";
                    if (signaturesData.length !== 0) {
                        for (let i = 0; i < signaturesData.length; i++) {
                            let name = signaturesData[i].name,
                                sec_hash = signaturesData[i].hash,
                                sec_size = signaturesData[i].size,
                                sec_attr = signaturesData[i].attr;

                            signatures = signatures + `<tr>
                                <td>${name}</td>
                                <td>${sec_hash}</td>
                                <td>${sec_size}</td>
                                <td>${sec_attr}</td>
                                </tr>`;
                        }
                    } else {
                        signatures = `<div>No Data</div>`;
                    }
                    return `<div class="panel" style="border: 0;">
                            <div class="panel-heading">
                              <h3 class="panel-title">Section</h3>
                            </div>
                            <div class="panel-body">
                            <div class="table-responsive">
                                <table class="tbl_section table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Hash</th>
                                            <th>Size</th>
                                            <th>Attr</th>
                                        </tr>
                                    </thead>
                                    ${signatures}</tbody>
                                </table>
                            </div>
                            </div>
                        </div></div>`;
                }

                res_data = `<div class="container">
                        <div class="back-link">
                            <a class="submit_new" href="./">
                                <svg width="20px" height="26px" viewBox="0 0 20 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="к&gt;&gt;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Gridinsoft-File-Checker----Result" transform="translate(-1102.000000, -425.000000)">
                                            <g id="Group-5" transform="translate(1102.000000, 425.000000)">
                                                <path d="M1,0.5 C0.723857625,0.5 0.5,0.723857625 0.5,1 L0.5,25 C0.5,25.2761424 0.723857625,25.5 1,25.5 L19,25.5 C19.2761424,25.5 19.5,25.2761424 19.5,25 L19.5,5.72028788 C19.5,5.5793651 19.4405313,5.44498551 19.3362295,5.35022072 L14.1408992,0.629932844 C14.0488759,0.546323847 13.9290029,0.5 13.8046696,0.5 L1,0.5 Z" id="Rectangle" stroke="#5E8DB7" fill="#F8F9FA"></path>
                                                <path d="M1,0.5 C0.723857625,0.5 0.5,0.723857625 0.5,1 L0.5,25 C0.5,25.2761424 0.723857625,25.5 1,25.5 L19,25.5 C19.2761424,25.5 19.5,25.2761424 19.5,25 L19.5,6.29077406 C19.499993,6.287538 19.499993,6.287538 19.4999581,6.28430212 C19.4963838,6.00818288 19.2696473,5.7872416 18.9935281,5.79081595 L16.2234702,5.82667425 C16.2072908,5.82684878 16.2072908,5.82684878 16.1911105,5.82688369 C14.8103987,5.82688369 13.6911105,4.70759556 13.6911105,3.32688369 L13.6911105,1 C13.6911105,0.723857625 13.4672529,0.5 13.1911105,0.5 L1,0.5 Z" id="Rectangle" stroke="#5E8DB7" fill="#F8F9FA"></path>
                                                <g id="Group-4" transform="translate(3.000000, 4.000000)" stroke="#5E8DB7">
                                                    <circle id="Oval" fill="#FAFCFF" cx="3.375" cy="3.375" r="3.375"></circle>
                                                    <path d="M5.56553969,6.3777954 L7.28086591,8.00240595 L7.78844468,7.4379995 L6.14759862,5.91057902 L5.56553969,6.3777954 Z" id="Rectangle" fill="#DDF0FA"></path>
                                                </g>
                                                <rect id="Rectangl" fill="#5E8DB7" x="13" y="8" width="5" height="1"></rect>
                                                <rect id="Rectangl" fill="#5E8DB7" x="13" y="11" width="5" height="1"></rect>
                                                <rect id="Rectangl" fill="#5E8DB7" x="3" y="14" width="15" height="1"></rect>
                                                <rect id="Rectangl" fill="#5E8DB7" x="3" y="17" width="15" height="1"></rect>
                                                <rect id="Rectangl" fill="#5E8DB7" x="3" y="20" width="15" height="1"></rect>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span>Submit a new file...</span>
                            </a>
                        </div>
                        <div class="page-header">
                            <div>Submission Summary:</div>
                        </div>
                            <div class="top-det" style="font-size: 22px;font-weight: 700;color: #333;">
                              <p>File Name &nbsp;&nbsp;<span> ${file.name} </span></p></div> 
                                ${Heuristic(result) }
                                ${butt_block(result)} 
                                ${fileDetailsHtml(result)}
                                ${signaturesBuilder(result.sec)}`;

                $('#result').html(res_data);

            })
            .catch(onResponse);
    }

    function onResponse() {
        let log = `<div class="container">
                        <div class="back-link">
                            <a class="submit_new" href="./">
                                <svg width="20px" height="26px" viewBox="0 0 20 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="к&gt;&gt;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Gridinsoft-File-Checker----Result" transform="translate(-1102.000000, -425.000000)">
                                            <g id="Group-5" transform="translate(1102.000000, 425.000000)">
                                                <path d="M1,0.5 C0.723857625,0.5 0.5,0.723857625 0.5,1 L0.5,25 C0.5,25.2761424 0.723857625,25.5 1,25.5 L19,25.5 C19.2761424,25.5 19.5,25.2761424 19.5,25 L19.5,5.72028788 C19.5,5.5793651 19.4405313,5.44498551 19.3362295,5.35022072 L14.1408992,0.629932844 C14.0488759,0.546323847 13.9290029,0.5 13.8046696,0.5 L1,0.5 Z" id="Rectangle" stroke="#5E8DB7" fill="#F8F9FA"></path>
                                                <path d="M1,0.5 C0.723857625,0.5 0.5,0.723857625 0.5,1 L0.5,25 C0.5,25.2761424 0.723857625,25.5 1,25.5 L19,25.5 C19.2761424,25.5 19.5,25.2761424 19.5,25 L19.5,6.29077406 C19.499993,6.287538 19.499993,6.287538 19.4999581,6.28430212 C19.4963838,6.00818288 19.2696473,5.7872416 18.9935281,5.79081595 L16.2234702,5.82667425 C16.2072908,5.82684878 16.2072908,5.82684878 16.1911105,5.82688369 C14.8103987,5.82688369 13.6911105,4.70759556 13.6911105,3.32688369 L13.6911105,1 C13.6911105,0.723857625 13.4672529,0.5 13.1911105,0.5 L1,0.5 Z" id="Rectangle" stroke="#5E8DB7" fill="#F8F9FA"></path>
                                                <g id="Group-4" transform="translate(3.000000, 4.000000)" stroke="#5E8DB7">
                                                    <circle id="Oval" fill="#FAFCFF" cx="3.375" cy="3.375" r="3.375"></circle>
                                                    <path d="M5.56553969,6.3777954 L7.28086591,8.00240595 L7.78844468,7.4379995 L6.14759862,5.91057902 L5.56553969,6.3777954 Z" id="Rectangle" fill="#DDF0FA"></path>
                                                </g>
                                                <rect id="Rectangl" fill="#5E8DB7" x="13" y="8" width="5" height="1"></rect>
                                                <rect id="Rectangl" fill="#5E8DB7" x="13" y="11" width="5" height="1"></rect>
                                                <rect id="Rectangl" fill="#5E8DB7" x="3" y="14" width="15" height="1"></rect>
                                                <rect id="Rectangl" fill="#5E8DB7" x="3" y="17" width="15" height="1"></rect>
                                                <rect id="Rectangl" fill="#5E8DB7" x="3" y="20" width="15" height="1"></rect>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span>Submit a new file...</span>
                            </a>
                        </div>`;
        $('#result').html(log);
    }

    // sendNNWhite_f('02AC163E4C4DE1C2C71A5F0FC294BFAE', '766976', '02002081', '0.5', '0.1', '0.369', '0');
    function sendNNWhite_f(hash, f_size, value, size, diffss, entr, impsec) {
        var r = confirm("Send '" + hash + ":" + size + "' to NN white?");
        if (r == true) {
            $.get('http://bind.antivirus-lab.com/criteria/fp.php?md5=' + hash + '&size=' + f_size + '&sz=' + size + '&val=' + value + '&difss=' + diffss + '&entr=' + entr + '&impsec=' + impsec);
            showNotification('White successfully sent', 'success');
        }
    }
    // sendNNWhite_m('02AC163E4C4DE1C2C71A5F0FC294BFAE', '766976', '02002081', '0.5', '0.1', '0.369', '0');
    function sendNNWhite_m(hash, f_size, value, size, diffss, entr, impsec) {
        var r = confirm("Send '" + hash + ":" + size + "' to NN white?");
        if (r == true) {
            $.get('http://bind.antivirus-lab.com/criteria/inf.php?md5=' + hash + '&size=' + f_size + '&sz=' + size + '&val=' + value + '&difss=' + diffss + '&entr=' + entr + '&impsec=' + impsec);
            showNotification('White successfully sent', 'success');
        }
    }

    var dropZone = $('#upload-container');

    $('#file-input').focus(function () {
            $('label').addClass('focus');
        })
        .focusout(function () {
            $('label').removeClass('focus');
        });
    dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
        e.preventDefault();
    });

    dropZone.on('dragover dragenter', function () {
        dropZone.addClass('dragover');
    });

    dropZone.on('dragleave', function (e) {
        let dx = e.pageX - dropZone.offset().left;
        let dy = e.pageY - dropZone.offset().top;
        if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
            dropZone.removeClass('dragover');
        }
    });

    dropZone.on('drop', function (e) {
        dropZone.removeClass('dragover');
        let file = e.originalEvent.dataTransfer.files[0];

        if (!file) {
            return;
        } else {
            upload(file);
        } 
    });
})(document, axios);