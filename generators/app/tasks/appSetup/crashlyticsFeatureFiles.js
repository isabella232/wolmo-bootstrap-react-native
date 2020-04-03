function addConfigToAndroidFiles() {
  let buildGradleContent = this.fs.read(`${this.projectName}/android/build.gradle`);
  buildGradleContent = buildGradleContent.replace(
    'jcenter()',
    "jcenter()\n\t\tmaven {\n\t\t\turl 'https://maven.fabric.io/public'\n\t\t}"
  );
  buildGradleContent = buildGradleContent.replace(
    '// NOTE: Do not place your application dependencies here; they belong',
    "classpath 'io.fabric.tools:gradle:1.+'\n\t\t// NOTE: Do not place your application dependencies here; they belong"
  );
  this.fs.write(`${this.projectName}/android/build.gradle`, buildGradleContent);

  let appBuildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  appBuildGradleContent = appBuildGradleContent.replace(
    'apply plugin: "com.android.application"',
    'apply plugin: "com.android.application"\napply plugin: \'io.fabric\'\n\ncrashlytics {\n\tenableNdk true\n}\n'
  );
  this.fs.write(`${this.projectName}/android/app/build.gradle`, appBuildGradleContent);
}

function addConfigToIosFiles() {
  const crashlyticsPod = `\nproject.targets.each do |target|
    if target.name == "appTest"
       if  !target.shell_script_build_phases.find { |bp| bp.name == 'Crashlytics' }
          puts "Adding run script for Crashlytics"
          phase=target.new_shell_script_build_phase("Crashlytics")
          phase.shell_script="$\{PODS_ROOT}/Fabric/run"
       end
    end
  end\nproject.save()`;

  const updateCrashlyticsPod = crashlyticsPod.split('appTest').join(this.projectName);
  const podfileContent = this.fs.read(`${this.projectName}/ios/Podfile`);
  const updatePodfileContent = podfileContent.replace('project.save()', updateCrashlyticsPod);
  this.fs.write(`${this.projectName}/ios/Podfile`, updatePodfileContent);
}

module.exports = function crashlyticsFeatureFiles() {
  addConfigToAndroidFiles.bind(this)();
  addConfigToIosFiles.bind(this)();
};
