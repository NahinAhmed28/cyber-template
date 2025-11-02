import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import handlebars from 'vite-plugin-handlebars';

const htmlPages = fs.readdirSync(path.resolve(__dirname, 'src/html')).filter(file => file.endsWith('.html'));

export default defineConfig({
  root: 'src/html',
  base: '',
  publicDir: 'public',
  resolve: {
    alias: {
      '/@src': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: htmlPages.reduce((entries, file) => {
        const name = path.parse(file).name;
        entries[name] = path.resolve(__dirname, 'src/html', file);
        return entries;
      }, {}),
      output: {
        entryFileNames: 'assets/js/app.min.js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'assets/css/app.min.css';
          }
          if (name && name.endsWith('.js')) {
            return 'assets/js/app.min.js';
          }
          return 'assets/[name].[ext]';
        }
      }
    },
    minify: 'esbuild'
  },
  plugins: [
  	handlebars({
      partialDirectory: path.resolve(__dirname, 'src/html/partials'),
    }),
    viteStaticCopy({
      targets: [
        { src: '../data/*', dest: 'assets/data' },
        { src: '../img/*', dest: 'assets/img' },
        { src: '../js/demo/*', dest: 'assets/js/demo' },
        { src: '../../node_modules/@fortawesome/fontawesome-free/css/*', dest: 'assets/plugins/@fortawesome/fontawesome-free/css' },
        { src: '../../node_modules/@fortawesome/fontawesome-free/webfonts/*', dest: 'assets/plugins/@fortawesome/fontawesome-free/webfonts' },
				{ src: '../../node_modules/@fullcalendar/*', dest: 'assets/plugins/@fullcalendar' },
				{ src: '../../node_modules/apexcharts/*', dest: 'assets/plugins/apexcharts' },
				{ src: '../../node_modules/bootstrap/*', dest: 'assets/plugins/bootstrap' },
				{ src: '../../node_modules/bootstrap-icons/*', dest: 'assets/plugins/bootstrap-icons' },
				{ src: '../../node_modules/blueimp-file-upload/*', dest: 'assets/plugins/blueimp-file-upload' },
				{ src: '../../node_modules/blueimp-tmpl/*', dest: 'assets/plugins/blueimp-tmpl' },
				{ src: '../../node_modules/blueimp-gallery/*', dest: 'assets/plugins/blueimp-gallery' },
				{ src: '../../node_modules/blueimp-canvas-to-blob/*', dest: 'assets/plugins/blueimp-canvas-to-blob' },
				{ src: '../../node_modules/blueimp-load-image/*', dest: 'assets/plugins/blueimp-load-image' },
				{ src: '../../node_modules/bootstrap-datepicker/*', dest: 'assets/plugins/bootstrap-datepicker' },
				{ src: '../../node_modules/bootstrap-daterangepicker/*', dest: 'assets/plugins/bootstrap-daterangepicker' },
				{ src: '../../node_modules/bootstrap-slider/*', dest: 'assets/plugins/bootstrap-slider' },
				{ src: '../../node_modules/bootstrap-timepicker/*', dest: 'assets/plugins/bootstrap-timepicker' },
				{ src: '../../node_modules/bootstrap-table/dist/*', dest: 'assets/plugins/bootstrap-table/dist' },
				{ src: '../../node_modules/chart.js/dist/*', dest: 'assets/plugins/chart.js/dist' },
				{ src: '../../node_modules/datatables.net/*', dest: 'assets/plugins/datatables.net' },
				{ src: '../../node_modules/datatables.net-bs5/*', dest: 'assets/plugins/datatables.net-bs5' },
				{ src: '../../node_modules/datatables.net-autofill/*', dest: 'assets/plugins/datatables.net-autofill' },
				{ src: '../../node_modules/datatables.net-autofill-bs5/*', dest: 'assets/plugins/datatables.net-autofill-bs5' },
				{ src: '../../node_modules/datatables.net-buttons/*', dest: 'assets/plugins/datatables.net-buttons' },
				{ src: '../../node_modules/datatables.net-buttons-bs5/*', dest: 'assets/plugins/datatables.net-buttons-bs5' },
				{ src: '../../node_modules/datatables.net-colreorder/*', dest: 'assets/plugins/datatables.net-colreorder' },
				{ src: '../../node_modules/datatables.net-colreorder-bs5/*', dest: 'assets/plugins/datatables.net-colreorder-bs5' },
				{ src: '../../node_modules/datatables.net-fixedcolumns/*', dest: 'assets/plugins/datatables.net-fixedcolumns' },
				{ src: '../../node_modules/datatables.net-fixedcolumns-bs5/*', dest: 'assets/plugins/datatables.net-fixedcolumns-bs5' },
				{ src: '../../node_modules/datatables.net-fixedheader/*', dest: 'assets/plugins/datatables.net-fixedheader' },
				{ src: '../../node_modules/datatables.net-fixedheader-bs5/*', dest: 'assets/plugins/datatables.net-fixedheader-bs5' },
				{ src: '../../node_modules/datatables.net-keytable/*', dest: 'assets/plugins/datatables.net-keytable' },
				{ src: '../../node_modules/datatables.net-keytable-bs5/*', dest: 'assets/plugins/datatables.net-keytable-bs5' },
				{ src: '../../node_modules/datatables.net-responsive/*', dest: 'assets/plugins/datatables.net-responsive' },
				{ src: '../../node_modules/datatables.net-responsive-bs5/*', dest: 'assets/plugins/datatables.net-responsive-bs5' },
				{ src: '../../node_modules/datatables.net-rowgroup/*', dest: 'assets/plugins/datatables.net-rowgroup' },
				{ src: '../../node_modules/datatables.net-rowgroup-bs5/*', dest: 'assets/plugins/datatables.net-rowgroup-bs5' },
				{ src: '../../node_modules/datatables.net-rowreorder-bs5/*', dest: 'assets/plugins/datatables.net-rowreorder-bs5' },
				{ src: '../../node_modules/datatables.net-scroller/*', dest: 'assets/plugins/datatables.net-scroller' },
				{ src: '../../node_modules/datatables.net-scroller-bs5/*', dest: 'assets/plugins/datatables.net-scroller-bs5' },
				{ src: '../../node_modules/datatables.net-select/*', dest: 'assets/plugins/datatables.net-select' },
				{ src: '../../node_modules/datatables.net-select-bs5/*', dest: 'assets/plugins/datatables.net-select-bs5' },
				{ src: '../../node_modules/jquery/*', dest: 'assets/plugins/jquery' },
				{ src: '../../node_modules/jquery-migrate/*', dest: 'assets/plugins/jquery-migrate' },
				{ src: '../../node_modules/jquery-typeahead/*', dest: 'assets/plugins/jquery-typeahead' },
				{ src: '../../node_modules/jquery-ui-dist/*', dest: 'assets/plugins/jquery-ui-dist' },
				{ src: '../../node_modules/jquery.maskedinput/*', dest: 'assets/plugins/jquery.maskedinput' },
				{ src: '../../node_modules/js-cookie/*', dest: 'assets/plugins/js-cookie' },
				{ src: '../../node_modules/jszip/*', dest: 'assets/plugins/jszip' },
				{ src: '../../node_modules/jvectormap-content/*', dest: 'assets/plugins/jvectormap-content' },
				{ src: '../../node_modules/jvectormap-next/*', dest: 'assets/plugins/jvectormap-next' },
				{ src: '../../node_modules/kbw-countdown/*', dest: 'assets/plugins/kbw-countdown' },
				{ src: '../../node_modules/lity/*', dest: 'assets/plugins/lity' },
				{ src: '../../node_modules/masonry-layout/*', dest: 'assets/plugins/masonry-layout' },
				{ src: '../../node_modules/moment/*', dest: 'assets/plugins/moment' },
				{ src: '../../node_modules/pace-js/*', dest: 'assets/plugins/pace-js' },
				{ src: '../../node_modules/pdfmake/*', dest: 'assets/plugins/pdfmake' },
				{ src: '../../node_modules/perfect-scrollbar/*', dest: 'assets/plugins/perfect-scrollbar' },
				{ src: '../../node_modules/photoswipe/*', dest: 'assets/plugins/photoswipe' },
				{ src: '../../node_modules/select-picker/*', dest: 'assets/plugins/select-picker' },
				{ src: '../../node_modules/spectrum-colorpicker2/*', dest: 'assets/plugins/spectrum-colorpicker2' },
				{ src: '../../node_modules/summernote/*', dest: 'assets/plugins/summernote' },
				{ src: '../../node_modules/tag-it/*', dest: 'assets/plugins/tag-it' }
      ],
    }),
  ]
});