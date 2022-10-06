function config() {
    var ini = [
        {   // 1.
            name: 'NLGF',
            img_width: 9934,
            img_height: 2310,
            img_depth: 15 * 6.0121,
            particle_size: 8000.0,
            geneData: [{mediaLink: './data/NLGF/geneData.tsv', size: "22642365"}],
        },
        {   // 2.
            name: 'NLGF_2',
            img_width: 9934,
            img_height: 2310,
            img_depth: 15 * 6.0121,
            particle_size: 8000.0,
            geneData: [{mediaLink: './data/NLGF_2/geneData.tsv', size: "22642365"}],
        },
    ];
    return d3.map(ini, function (d) {return d.name;})
}

